import { Shield, ClipboardCheck, Clock, MapPin, Building2, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "CWS FOG Specialists",
    description: "We are deeply familiar with the Charleston Water System (CWS) FOG program and ensure all reporting is handled correctly to avoid fines."
  },
  {
    icon: CheckCircle2,
    title: "Clean Kitchen Focus",
    description: "Grease trap maintenance is vital for a sanitary environment. Our team uses specialized equipment to minimize odors and mess."
  },
  {
    icon: Building2,
    title: "Restaurant Ready",
    description: "We work around your schedule—performing pumping during off-peak hours to avoid any disruption to your customers' dining experience."
  },
  {
    icon: ClipboardCheck,
    title: "Certified Tracking",
    description: "Every pump is documented. We provide you with precise waste tracking logs required for health department inspections."
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "Never miss a cleaning date again. Our automated scheduling system ensures your traps are serviced exactly when needed."
  },
  {
    icon: MapPin,
    title: "Lowcountry Local",
    description: "Born and bread in Charleston. We serve the peninsula, Mount Pleasant, West Ashley, James Island, and beyond."
  }
];

const stats = [
  { number: "100%", label: "Compliance Rate" },
  { number: "24/7", label: "Support" },
  { number: "500+", label: "Local Clients" },
  { number: "Certified", label: "SC Hauler" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Charleston's Trusted Partner in Grease Management
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Running a kitchen is hard enough—let us handle the FOG compliance. We provide the most reliable grease trap services in the Lowcountry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
