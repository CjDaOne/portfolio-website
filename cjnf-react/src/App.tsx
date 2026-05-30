import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

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
