import { Droplets, ShieldCheck, Zap, Home, CheckCircle2 } from "lucide-react";

const charlotteFactors = [
    {
        icon: Home,
        title: "Historic District Protection",
        description: "From Myers Park to Dilworth, Charlotte's historic homes require delicate plumbing care. We specialize in upgrading vintage pipes while maintaining the architectural integrity of Mecklenburg County's iconic properties."
    },
    {
        icon: Droplets,
        title: "Hard Water Solutions",
        description: "Charlotte's water can contain mineral levels that stress your appliances. We provide advanced filtration and scale-prevention systems tailored to the specific chemical profile of the Queen City's water supply."
    },
    {
        icon: Zap,
        title: "Rapid Uptown Dispatch",
        description: "Whether you're in the heart of Uptown or the suburbs of Ballantyne, our mobile units are strategically positioned for the fastest emergency response in the region. We navigate QC traffic to reach you first."
    },
    {
        icon: ShieldCheck,
        title: "Compliance & Safety",
        description: "We adhere strictly to North Carolina building codes and Charlotte-Mecklenburg utilities standards, ensuring every repair and installation is fully permitted and built to last."
    }
];

const plumbingBenefits = [
    {
        title: "Master Licensed Techs",
        description: "Our plumbers are NC-licensed masters with deep expertise in both traditional and modern infrastructure systems."
    },
    {
        title: "CCTV Pipe Analytics",
        description: "We use high-definition camera technology to diagnose sewer issues accurately, preventing unnecessary digging in your Charlotte yard."
    },
    {
        title: "Flat-Rate Assessments",
        description: "Transparency is our priority. You'll receive a detailed project breakdown and fixed-rate pricing before any restoration begins."
    },
    {
        title: "24/7 Priority Support",
        description: "Charlotte plumbing emergencies don't stick to business hours. Our response teams are on standby 365 days a year."
    }
];

const CharlottePlumbingInfo = () => {
    return (
        <section id="charlotte-plumbing-info" className="py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        The Queen City's Plumbing Authority
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic text-emerald-100">
                        Professional Infrastructure Care in Charlotte, NC
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Charlotte is a city of rapid growth and deep history. From the expanding skylines of Uptown to the tree-lined streets of SouthPark,
                        we provide the technical expertise needed to maintain and restore the vital plumbing systems that keep our city flowing.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {charlotteFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-gold-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gold-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-gold-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-gold-400">
                                Mecklenburg Infrastructure Specialists
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                Don't trust your property to a generalist. Our Charlotte technicians are specifically trained for the regional
                                soil conditions and architectural standards unique to North Carolina's largest metropolitan center.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {plumbingBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80"
                                alt="Charlotte NC Skyline"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Professional Quality Mastercraft</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategic Service Network */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Strategic Service Network
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Dallas Plumber", link: "https://dallasplumber.vercel.app" },
                            { name: "San Antonio Plumbing", link: "https://sanantonioplumbing.vercel.app" },
                            { name: "Plumber San Francisco CA", link: "https://plumbersanfranciscoca.vercel.app/" }
                        ].map((site) => (
                            <a
                                key={site.name}
                                href={site.link}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest hover:border-gold-500/50 shadow-xl"
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharlottePlumbingInfo;
