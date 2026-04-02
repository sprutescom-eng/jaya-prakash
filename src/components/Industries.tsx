import { TrendingUp, Sprout, Hammer, ChevronRight } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry-Specific Solution</h2>
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

export default Industries;
