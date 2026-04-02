import { motion } from "motion/react";
import { 
  Calculator, 
  Package, 
  Users, 
  TrendingUp, 
  Sprout, 
  Hammer, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Modules", href: "#modules" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold font-display text-brand-700 tracking-tight">
              Minfinity<span className="text-brand-500">.</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <button className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100/50 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-200/40 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-700 uppercase bg-brand-100 rounded-full">
              The Future of Enterprise Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Scale Your Business with <span className="text-brand-600">Minfinity ERP</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              A unified platform to manage Accounting, Inventory, and Payroll. 
              Tailored solutions for FMCG, Farming, and Construction industries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="aspect-[16/9] bg-slate-50 flex items-center justify-center">
               <div className="grid grid-cols-3 gap-6 p-8 w-full h-full">
                  <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col space-y-4">
                    <div className="h-8 w-1/3 bg-slate-100 rounded animate-pulse" />
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="bg-brand-50/50 rounded-lg" />
                      <div className="bg-brand-50/50 rounded-lg" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col space-y-4">
                    <div className="h-8 w-1/2 bg-slate-100 rounded animate-pulse" />
                    <div className="h-4 w-full bg-slate-50 rounded" />
                    <div className="h-4 w-full bg-slate-50 rounded" />
                    <div className="h-4 w-full bg-slate-50 rounded" />
                  </div>
               </div>
            </div>
          </div>
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 hidden lg:block">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Efficiency</p>
                <p className="text-xl font-bold text-slate-900">+42% Growth</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Modules = () => {
  const modules = [
    {
      title: "Accounting",
      description: "Comprehensive financial management with real-time reporting, tax compliance, and automated invoicing.",
      icon: <Calculator className="w-8 h-8" />,
      color: "bg-blue-500",
      features: ["General Ledger", "Accounts Payable/Receivable", "Tax Management", "Financial Reports"]
    },
    {
      title: "Inventory Management",
      description: "Track stock levels, manage warehouses, and optimize supply chains with intelligent forecasting.",
      icon: <Package className="w-8 h-8" />,
      color: "bg-indigo-500",
      features: ["Stock Tracking", "Warehouse Management", "Order Fulfillment", "Supplier Portal"]
    },
    {
      title: "Payroll",
      description: "Streamline employee compensation, benefits, and compliance with our automated payroll engine.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-500",
      features: ["Salary Processing", "Tax Deductions", "Attendance Integration", "Employee Self-Service"]
    }
  ];

  return (
    <section id="modules" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Core Modules</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to run your business efficiently, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className={`${mod.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                {mod.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{mod.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {mod.description}
              </p>
              <ul className="space-y-3">
                {mod.features.map(f => (
                  <li key={f} className="flex items-center text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    {
      name: "FMCG",
      description: "Fast-moving consumer goods require fast-moving ERP. Manage high-volume transactions and distribution networks.",
      icon: <TrendingUp className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Farming",
      description: "From crop management to livestock tracking and yield analysis. Agriculture meets digital transformation.",
      icon: <Sprout className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Construction",
      description: "Manage projects, labor, equipment, and materials. Keep your builders on track and within budget.",
      icon: <Hammer className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-slate-600">
              Generic software doesn't cut it. We've built specialized workflows for the industries that power the world.
            </p>
          </div>
          <button className="text-brand-600 font-bold flex items-center hover:underline">
            View all industries <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {industries.map((ind) => (
            <div key={ind.name} className="group cursor-pointer">
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={ind.image} 
                  alt={ind.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl mb-3 inline-block">
                    {ind.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{ind.name}</h3>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/20 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-brand-200 text-lg mb-10 max-w-lg">
              Join thousands of businesses that trust Minfinity to power their daily operations. 
              Schedule a personalized demo with our experts today.
            </p>
            
            <div className="space-y-6">
              {[
                "Free 14-day trial, no credit card required",
                "Personalized onboarding for your team",
                "24/7 priority support included",
                "Custom module development available"
              ].map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="bg-brand-500/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  </div>
                  <span className="text-brand-100 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Request a Demo</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Industry</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white">
                  <option>FMCG</option>
                  <option>Farming</option>
                  <option>Construction</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all h-24 resize-none" placeholder="Tell us about your needs..." />
              </div>
              <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <span className="text-2xl font-bold font-display text-brand-700 tracking-tight mb-6 block">
              Minfinity<span className="text-brand-500">.</span>
            </span>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              The next-generation ERP platform designed for modern enterprises. 
              Efficiency, transparency, and growth in one unified system.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-600">Features</a></li>
              <li><a href="#" className="hover:text-brand-600">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600">Security</a></li>
              <li><a href="#" className="hover:text-brand-600">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-600">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Minfinity ERP Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Icons Placeholder */}
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

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
