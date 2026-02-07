import { ShieldCheck, Trash2, ClipboardCheck, AlertTriangle, MapPin, Search } from "lucide-react";

const GreaseTrapInfo = () => {
    const complianceTips = [
        {
            icon: ClipboardCheck,
            title: "Charleston FOG Compliance",
            description: "The Charleston Water System (CWS) enforces a strict FOG Program. Restaurants must have their grease traps pumped and cleaned at least every 90 days, or more often if the trap is 25% full."
        },
        {
            icon: AlertTriangle,
            title: "Avoid Surcharge Fines",
            description: "Improper disposal of grease into the sewer system leads to massive sewer surcharges and potential closure by the health department. We ensure all waste is manifest-tracked."
        },
        {
            icon: Search,
            title: "Proactive Inspections",
            description: "Wait for an inspector to find a problem, and it's too late. We provide pre-inspection reports to ensure your interceptors are in perfect working order."
        },
        {
            icon: Trash2,
            title: "Certified SC Waste Hauler",
            description: "We are fully licensed by the State of South Carolina to collect, transport, and dispose of grease waste safely at designated environmental facilities."
        }
    ];

    const lowcountryFactors = [
        {
            icon: MapPin,
            title: "Peninsula Drainage Challenges",
            description: "In historic downtown Charleston, older sewer lines are particularly vulnerable to grease clogs. A single backup can cause immense damage to historic properties."
        },
        {
            icon: ShieldCheck,
            title: "Flood Zone Considerations",
            description: "Grease traps in low-lying Charleston areas require special attention after flooding events to ensure tidal water hasn't compromised the interceptor's seal."
        }
    ];

    return (
        <section id="grease-trap-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 capitalize leading-tight">
                            Essential FOG Compliance for <span className="text-blue-600">Charleston Kitchens</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed shadow-sm p-4 bg-white/50 rounded-xl border border-blue-100">
                            Operating a restaurant in the Lowcountry means staying on top of grease management. Our certified pumping services keep you compliant with local regulations and protect our beautiful coastal environment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {complianceTips.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow-inner">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">Charleston-Specific Grease Management</h3>
                            <div className="grid md:grid-cols-2 gap-12">
                                {lowcountryFactors.map((factor, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <factor.icon className="w-6 h-6 text-blue-400" />
                                            <h4 className="text-lg font-bold">{factor.title}</h4>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                                            {factor.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Abstract Water/Wave Design element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
                    </div>

                    <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Are you due for a Grease Trap Pump?</h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            The 25% rule is strictly enforced in Charleston. Don't risk FOG surcharges or health department shutdowns. Schedule your certified cleaning today.
                        </p>
                        <a
                            href="tel:8777921410"
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                        >
                            Call (877) 792-1410
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreaseTrapInfo;
