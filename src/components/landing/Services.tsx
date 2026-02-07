import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Electronic Detection",
    description: "Using high-frequency acoustic equipment to pinpoint the exact location of water leaks under your concrete slab with zero damage.",
    link: "#slab-info"
  },
  {
    icon: Hammer,
    title: "Slab Repair",
    description: "Professional repair of leaking copper or PEX lines under your foundation using precision direct-access methods to minimize debris.",
    link: "#slab-info"
  },
  {
    icon: Activity,
    title: "Thermal Imaging",
    description: "Advanced infrared technology to detect temperature variances in your floors, helping to confirm the presence of hot water slab leaks.",
    link: "#slab-info"
  },
  {
    icon: Zap,
    title: "Emergency Service",
    description: "Facing a major foundation flood? Our Asheville team provides 24/7 rapid response to mitigate water damage and stop the leak.",
    link: "#slab-info"
  },
  {
    icon: Shield,
    title: "Trenchless Solutions",
    description: "Innovative pipe lining and coating services that repair slab leaks from the inside out without the need for trenching your floors.",
    link: "#slab-info"
  },
  {
    icon: Waves,
    title: "Hydrostatic Testing",
    description: "Comprehensive pressure testing of your home's entire plumbing system to identify the presence and severity of under-slab leaks.",
    link: "#slab-info"
  },
  {
    icon: AlertTriangle,
    title: "Insurance Assistance",
    description: "We work directly with your insurance provider in Buncombe County, providing documented proof of slab leaks for your claim.",
    link: "#slab-info"
  },
  {
    icon: Droplets,
    title: "Full Re-piping",
    description: "When old pipes are too far gone, we provide strategic re-piping to bypass under-floor lines entirely, ensuring a permanent fix.",
    link: "#slab-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Slab Leak Solutions in Asheville
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing Western North Carolina's most advanced under-slab plumbing diagnostics and minimally invasive repair techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


