import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function MinfinityLanding() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
