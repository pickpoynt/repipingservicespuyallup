import { Wrench, MapPin, Search, Shield, Waves, AlertTriangle, FileCheck, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const SlabLeakInfo = () => {
    const slabServices = [
        {
            title: "Electronic Leak Detection",
            description: "Using ultra-sensitive acoustic equipment to pinpoint leaks beneath your concrete slab without unnecessary digging in your Asheville home."
        },
        {
            title: "Direct Access Repair",
            description: "When the leak location is identified, we perform precision jackhammering and pipe replacement, focusing on a single, small entry point."
        },
        {
            title: "Copper Re-piping",
            description: "For aging plumbing systems in Asheville's historic districts, we provide full re-piping solutions to bypass old, failure-prone under-slab lines."
        },
        {
            title: "Epoxy Pipe Coating",
            description: "A trenchless solution that lines your existing pipes from the inside, sealing leaks and preventing future corrosion without disturbing your floors."
        }
    ];

    const ashevilleFactors = [
        {
            icon: Waves,
            title: "Mountain Soil Dynamics",
            description: "Asheville's varied terrain can lead to soil shifting under foundations. We understand how local shifting causes stress on under-slab plumbing."
        },
        {
            icon: FileCheck,
            title: "Buncombe County Standards",
            description: "Our repairs strictly adhere to Asheville city and Buncombe County plumbing codes, ensuring your foundation integrity is maintained."
        },
        {
            icon: AlertTriangle,
            title: "High Water Bill Alerts",
            description: "In the Asheville area, sudden spikes in water usage often indicate a slab leak. We provide rapid diagnostic services to stop the waste."
        },
        {
            icon: MapPin,
            title: "Service Across WNC",
            description: "Providing expert slab leak solutions from West Asheville to Biltmore Forest and throughout the surrounding Blue Ridge communities."
        }
    ];

    return (
        <section id="slab-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-4">
                        slab leak repair asheville nc
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Expert Under-Slab Leak Detection & Repair in Asheville
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Suspect a water leak under your foundation? We specialize in non-invasive slab leak detection and precision repair for Asheville homeowners.
                        Don't let a hidden leak damage your home's foundation—our licensed plumbers use state-of-the-art technology to find and fix leaks fast.
                    </p>
                </div>

                {/* Service Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Search className="w-6 h-6 text-blue-600" />
                            Precision Detection & Solutions
                        </h3>
                        <div className="space-y-6">
                            {slabServices.map((service, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1">
                                        <Shield className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-white rounded-2xl p-2 shadow-lg -rotate-1 border border-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
                            alt="Professional Slab Leak Detection Asheville"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Local Factors */}
                <div className="mb-20">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-10 text-center">
                        Why Asheville Residents Trust Our Leak Specialists
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ashevilleFactors.map((factor, index) => {
                            const Icon = factor.icon;
                            return (
                                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{factor.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {factor.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Warning Tip */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mb-16 shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                            Don't Ignore These Warning Signs
                        </h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Warm spots on your floor, mold growth along baseboards, or the constant sound of running water when all faucets are off are critical indicators of a slab leak.
                            Left untreated, these leaks can cause catastrophic foundation cracks and structural instability.
                        </p>
                        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold border-none" asChild>
                            <a href="tel:8777921410" className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Expert Inspection: (877) 792-1410
                            </a>
                        </Button>
                    </div>

                    {/* Decorative Patterns */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>

                {/* Cost Information */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <div className="text-center mb-8">
                        <Hammer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            Estimated Slab Leak Repair Costs in Western NC
                        </h3>
                        <p className="text-slate-600">
                            Transparent pricing for specialized plumbing repair
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Leak Detection</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$250 - $600</div>
                            <p className="text-slate-600 text-sm">Professional electronic pinpointing</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Single Line Repair</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$1,500 - $3,500</div>
                            <p className="text-slate-600 text-sm">Direct access and spot repair</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Pipe Re-routing</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$2,500 - $6,000</div>
                            <p className="text-slate-600 text-sm">Bypassing failure points entirely</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-slate-500 italic text-sm">
                            *Prices are local Asheville estimates. Final cost depends on leak severity, location proximity to the manifold, and floor finishing replacement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlabLeakInfo;

