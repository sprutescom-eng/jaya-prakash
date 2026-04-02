import { motion } from "motion/react";
import { Calculator, Package, Users, CheckCircle2 } from "lucide-react";

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
          {modules.map((mod) => (
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

export default Modules;
