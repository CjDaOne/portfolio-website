import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import Login from './pages/Login';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [session, setSession] = useState<any>(null);
  const [showApp, setShowApp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [organization, setOrganization] = useState<any>(null);
  const [orgName, setOrgName] = useState('');
  const [submittingOrg, setSubmittingOrg] = useState(false);

  // 1. Listen for global authentication states
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchUserTenantContext(session.user.id);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchUserTenantContext(session.user.id);
      else {
        setOrganization(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Manage URL Routing paths and check auth overrides
useEffect(() => {
  const path = window.location.pathname;
  
  // If they are explicitly navigating to app routes, OR if the URL contains a Supabase auth token/code hash
  if (path === '/login' || path === '/dashboard' || window.location.hash.includes('access_token') || window.location.search.includes('code')) {
    setShowApp(true);
  } else if (session) {
    // If they are logged in, always show the dashboard app console instead of the landing page
    setShowApp(true);
  } else {
    setShowApp(false);
  }
}, [session]); // Add session as a dependency so it responds immediately when logging in

  // 2. Fetch the user's explicit multi-tenant profile and organization context
  async function fetchUserTenantContext(userId: string) {
    try {
      setLoading(true);
      // Query profiles table
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', userId)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError;
      }

      // If a profile exists with an organization link, fetch the company info
      if (profile?.organization_id) {
        const { data: org, error: orgError } = await supabase
          .from('organizations')
          .select('*')
          .eq('id', profile.organization_id)
          .single();

        if (orgError) throw orgError;
        setOrganization(org);
      }
    } catch (err) {
      console.error('Error fetching tenant matrix:', err);
    } finally {
      setLoading(false);
    }
  }

  // 3. Multi-Tenant Provisioning: Spin up a brand new organization instance
  async function handleCreateOrganization(e: React.FormEvent) {
    e.preventDefault();
    if (!orgName.trim() || !session?.user) return;

    setSubmittingOrg(true);
    const userId = session.user.id;
    const userEmail = session.user.email;

    try {
      // Step A: Insert the new organization entry
      const { data: newOrg, error: orgError } = await supabase
        .from('organizations')
        .insert([{ name: orgName, slug: orgName.toLowerCase().replace(/[^a-z0-9]/g, '-') }])
        .select()
        .single();

      if (orgError) throw orgError;

      // Step B: Upsert the user profile row linking them to this new organization as an ADMIN
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: userId,
          organization_id: newOrg.id,
          full_name: userEmail.split('@')[0],
          role: 'admin'
        });

      if (profileError) throw profileError;

      // Update state to render the brand new isolated workspace dashboard instantly
      setOrganization(newOrg);
    } catch (err: any) {
      alert(`Provisioning Failed: ${err.message}`);
    } finally {
      setSubmittingOrg(false);
    }
  }

  // Render App Layer
  if (showApp) {
    if (!session) {
      return <Login />;
    }

    if (loading) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
          <p className="text-lg animate-pulse">Resolving Tenant Isolation Matrix...</p>
        </div>
      );
    }

    // SCENARIO A: Authenticated but has NO active organization yet (Display Onboarding)
    if (!organization) {
      return (
        <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
          <div className="bg-slate-800 p-8 rounded-xl max-w-md w-full shadow-2xl border border-slate-700">
            <h1 className="text-2xl font-bold mb-2 text-center">Setup Your Workspace</h1>
            <p className="text-slate-400 text-sm mb-6 text-center">
              Create a dedicated secure tenant instance for your operations.
            </p>

            <form onSubmit={handleCreateOrganization} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Organization / Company Name</label>
                <input
                  type="text"
                  placeholder="e.g., Acme Corp or Logistics West"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submittingOrg}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition disabled:opacity-50"
              >
                {submittingOrg ? 'Provisioning Environment...' : 'Launch Workspace'}
              </button>
            </form>
          </div>
        </div>
      );
    }

    // SCENARIO B: Fully authenticated and matched to an isolated Tenant Organization
    return (
      <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
        <div className="bg-slate-800 p-8 rounded-xl max-w-xl w-full text-center shadow-xl border border-slate-700">
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
            Active Tenant Instance
          </span>
          <h1 className="text-3xl font-black mt-3 mb-1 text-white uppercase tracking-tight">
            {organization.name}
          </h1>
          <p className="text-slate-400 text-sm mb-6">Console User: {session.user.email}</p>
          
          <div className="p-4 bg-slate-900 rounded-lg text-left border border-slate-700 mb-6 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Tenant ID Context:</span>
              <span className="font-mono text-slate-300">{organization.id}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Environment Slug:</span>
              <span className="font-mono text-blue-400">{organization.slug}</span>
            </div>
          </div>

          <button 
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded-md text-sm font-semibold transition"
          >
            Disconnect Session
          </button>
        </div>
      </div>
    );
  }

  // 4. Default view: Public Landing Page
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-blue-900 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

