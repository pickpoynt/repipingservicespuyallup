import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Pipette } from "lucide-react";

const SalemSewerRepairInfo = () => {
    return (
        <section id="salem-sewer-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541604193435-2258789965d8?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Marion & Polk County Sewer Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Reliable <span className="text-indigo-600">Sewer Line Repair</span> in Salem
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting the infrastructure of Oregon's capital. Our Salem-based specialists provide master-grade sewer line repair and trenchless pipe lining for residential and commercial systems throughout the Mid-Willamette Valley.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-indigo-600" />
                                    Willamette Valley Infrastructure
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Pipette className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Trenchless Pipe Bursting</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We utilize advanced hydraulic equipment to replace old, damaged sewer lines without tearing up your lawn. A seamless new HDPE pipe is pulled directly through the existing path.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Root Removal & Jetting</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Salem's lush vegetation often leads to aggressive root intrusion. Our high-velocity hydro jetting clears obstructions and restores full capacity to your main lines.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Fiber-Optic Sewer Scans</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Precision internal diagnostics. We identify exact locations of blockages, cracks, or offsets, providing you with high-definition video evidence before we begin any restoration.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Salem & Mid-Willamette Service Area
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Fast, reliable sewer engineering across Marion and Polk Counties:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "West Salem",
                                        "Keizer",
                                        "Silverton",
                                        "Monmouth",
                                        "Independence",
                                        "Dallas",
                                        "Stayton",
                                        "Woodburn"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Salem Sewer Emergency?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    If your property is experiencing repeated backups or structural sinkholes, contact our Salem emergency sewer restoration team immediately for a technical assessment.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Master Plumbers</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Salem Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">DEQ Certified</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Priority Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic">
                                    Expert Internal Sewer Diagnostics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalemSewerRepairInfo;
