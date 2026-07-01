import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 1. Passwordless Magic Link Authentication Flow
  const handleMagicLinkLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Vercel routes or local dev URLs go here
        emailRedirectTo: window.location.origin,
      },
    });

    setLoading(false);
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Check your email inbox for your passwordless login link!');
    }
  };

  // 2. Google OAuth Authentication Flow
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
    
    if (error) console.error('OAuth Error:', error.message);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome to CJNF Systems</h2>
        <p style={styles.subtitle}>Sign in to your dashboard console</p>

        {/* Magic Link Form */}
        <form onSubmit={handleMagicLinkLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Sending...' : 'Send Magic Link'}
          </button>
        </form>

        <div style={styles.divider}>
          <span style={styles.dividerText}>or</span>
        </div>

        {/* Google OAuth Trigger */}
        <button onClick={handleGoogleLogin} style={styles.googleButton}>
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            style={styles.googleIcon} 
          />
          Continue with Google
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

// Inline styling schema for easy initial preview
const styles: Record<string, React.CSSProperties> = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f172a', color: '#fff', fontFamily: 'sans-serif' },
  card: { width: '100%', maxWidth: '400px', padding: '2.5rem', borderRadius: '12px', backgroundColor: '#1e293b', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)', textAlign: 'center' },
  title: { margin: '0 0 0.5rem 0', fontSize: '1.75rem', fontWeight: 600 },
  subtitle: { margin: '0 0 2rem 0', color: '#94a3b8', fontSize: '0.9rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', fontSize: '1rem' },
  button: { padding: '0.75rem', borderRadius: '6px', border: 'none', backgroundColor: '#2563eb', color: '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s' },
  divider: { position: 'relative', margin: '1.5rem 0', borderBottom: '1px solid #475569' },
  dividerText: { position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#1e293b', padding: '0 0.5rem', color: '#64748b', fontSize: '0.85rem' },
  googleButton: { width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#ffffff', color: '#1e293b', fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' },
  googleIcon: { width: '18px', height: '18px' },
  message: { marginTop: '1.5rem', color: '#38bdf8', fontSize: '0.9rem' }
};