import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Expert Asheville Slab Leak Help is One Call Away
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Facing a foundations plumbing emergency? Our licensed technicians are on standby throughout Asheville and Buncombe County to provide rapid detection and repair.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/40">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider text-sm">Emergency Hotlines</div>
                  <a href="tel:8777921410" className="text-2xl md:text-3xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                    (877) 792-1410
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <MapPin className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider text-sm">Service Area</div>
                  <div className="text-xl font-heading font-bold text-white">
                    Asheville, NC & Surrounding Areas
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <Clock className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider text-sm">Response Time</div>
                  <div className="text-xl font-heading font-bold text-white">
                    24/7 Rapid Emergency Response
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in-delay-1">
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Request a Priority Inspection
              </h3>
              <p className="text-slate-600 mb-8">
                Suspect a leak? Call our Asheville office immediately to schedule high-tech detection. Early action prevents foundation failure.
              </p>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 mb-1 leading-none uppercase text-xs tracking-widest">Local Guarantee</div>
                    <p className="text-sm text-slate-600">All Asheville slab leak repairs are backed by our 100% service guarantee and maintenance warranty.</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200 h-16 text-xl font-bold rounded-2xl" asChild>
                <a href="tel:8777921410" className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call (877) 792-1410
                </a>
              </Button>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
