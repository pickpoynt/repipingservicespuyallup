import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed Specialists",
    description: "Our plumbing experts are fully licensed in North Carolina with specialized certification in under-slab leak detection and foundation repair."
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "We use the latest sonar and thermal imaging devices to locate leaks through concrete and soil, ensuring we only dig where absolutely necessary."
  },
  {
    icon: MapPin,
    title: "Asheville Locals",
    description: "Deeply familiar with Asheville's unique geographic challenges, from mountain soil shifting to historic West Asheville piping systems."
  },
  {
    icon: Building2,
    title: "Foundation Protection",
    description: "Our methods prioritize the structural integrity of your home's foundation. We work cleanly and efficiently to preserve your property value."
  },
  {
    icon: ClipboardCheck,
    title: "Upfront Pricing",
    description: "No hidden fees. We provide clear, itemized estimates for both detection and repair, so you know the full cost before we start."
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Slab leaks don't wait. We provide priority scheduling for Asheville foundation emergencies to prevent catastrophic water damage."
  }
];

const stats = [
  { number: "500+", label: "Leaks Found" },
  { number: "100%", label: "Licensed & Insured" },
  { number: "24/7", label: "Emergency Support" },
  { number: "Local", label: "Asheville, NC" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Western NC's Preferred Leak Detection Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining local expertise with high-tech diagnostic tools to provide Asheville homeowners with reliable, non-invasive slab leak solutions.
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

        <div className="bg-blue-600 rounded-3xl p-12 text-white">
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
