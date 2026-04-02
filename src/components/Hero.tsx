import { motion } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";

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

export default Hero;
