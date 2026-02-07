import { Trash2, Droplets, Shield, MapPin, ClipboardCheck, Zap, Ruler, Activity } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Grease Trap Pumping",
    description: "Complete removal of all FOG (Fats, Oils, and Grease) from your kitchen interceptors, ensuring smooth drainage and zero odors.",
    link: "#grease-trap-info"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Documentation",
    description: "We provide all necessary manifest tags and reporting to keep you in good standing with Charleston Water System and local FOG programs.",
    link: "#grease-trap-info"
  },
  {
    icon: Activity,
    title: "Scheduled Maintenance",
    description: "Routine cleaning schedules tailored to your kitchen's volume, preventing costly emergency backups and fines.",
    link: "#grease-trap-info"
  },
  {
    icon: Shield,
    title: "Interceptor Inspection",
    description: "Verifying the structural integrity of your grease traps to ensure they are capturing grease effectively before it enters the sewer line.",
    link: "#grease-trap-info"
  },
  {
    icon: Zap,
    title: "Emergency Backups",
    description: "Drain slow or backing up? Our Charleston team is on call for rapid grease-related line clearing and trap cleaning.",
    link: "#grease-trap-info"
  },
  {
    icon: Droplets,
    title: "FOG Disposal",
    description: "Eco-friendly disposal of grease waste at certified South Carolina facilities, adhering to all state environmental standards.",
    link: "#grease-trap-info"
  },
  {
    icon: Ruler,
    title: "Interceptor Sizing",
    description: "Professional advice on grease interceptor sizing and installation requirements for new or expanding Charleston food businesses.",
    link: "#grease-trap-info"
  },
  {
    icon: MapPin,
    title: "Multi-Location Support",
    description: "Consolidated grease management services for restaurant groups and franchise owners across the Charleston metro area.",
    link: "#grease-trap-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Total Grease Management for Charleston Kitchens
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From the Battery to North Charleston, we help restaurants stay clean, compliant, and open for business.
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
