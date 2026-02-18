import { Phone, Mail, MapPin, Clock, ShieldCheck, Hammer, Locate } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm shadow-sm">
                <Locate className="w-4 h-4" />
                SALEM SEWER REPAIR PROS
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
                Schedule <span className="text-indigo-600">Salem Diagnostic</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
                Protect your Oregon property's infrastructure. Our Salem-based team provides technical, master-grade solutions for sewer line repair and trenchless pipe lining throughout Marion County.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group border-b border-slate-100 pb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">REPAIR HOTLINE</p>
                    <a href="tel:8777921410" className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-tight">
                      (877) 792-1410
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 border border-slate-100">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">OREGON LICENSED</p>
                    <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Marion County Certified</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 border border-slate-100">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Salem & Mid-Willamette</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-900/10 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Request Diagnostic</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium"
                      placeholder="(877) 792-1410"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Service Required</label>
                  <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium">
                    <option>Sewer Line Repair</option>
                    <option>Trenchless Pipe Lining</option>
                    <option>Sewer Camera Inspection</option>
                    <option>Hydro Jetting Service</option>
                    <option>Emergency Backup Service</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Issue Details</label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium"
                    placeholder="Describe your sewer or drainage concerns..."
                  ></textarea>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-indigo-900/20 uppercase tracking-widest transition-all">
                  Get Technical Quote
                </Button>
                <p className="text-center text-slate-500 text-sm italic font-medium">
                  *24/7 Priority diagnostics for Salem property emergencies
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
