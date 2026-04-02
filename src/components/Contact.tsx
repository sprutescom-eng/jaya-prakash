import { CheckCircle2 } from "lucide-react";

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

export default Contact;
