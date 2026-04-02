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

export default Footer;
