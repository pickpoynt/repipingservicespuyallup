import { Phone, Facebook, Twitter, Instagram, Linkedin, Hammer, MapPin, Locate } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Locate className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">Salem Sewer</span>
                <span className="text-sm font-medium text-blue-500 uppercase tracking-widest text-[10px]">Repair Pros</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic">
              Salem's specialized sewer engineering experts. We provide master-grade sewer line repair and trenchless pipe lining services across Marion County.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Trenchless Pipe Lining", "Sewer Camera Inspections", "Hydro Jetting Services", "Main Line Restoration"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Service Areas", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <address className="text-slate-400 not-italic font-medium leading-relaxed">
                  555 Liberty St SE<br />
                  Salem, OR 97301
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                <a href="tel:8777921410" className="text-xl font-bold text-white hover:text-blue-500 transition-colors">
                  (877) 792-1410
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-medium italic">
            © {new Date().getFullYear()} Salem Sewer Repair Pros. All rights reserved. Marion County Sewer Authorities.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Salem Sewer Repair Pros",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "555 Liberty St SE",
            "addressLocality": "Salem",
            "addressRegion": "OR",
            "postalCode": "97301",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.9429",
            "longitude": "-123.0351"
          },
          "telephone": "+18777921410",
          "url": "https://sewer-line-repair-salem-oregon.com/"
        })}
      </script>
    </footer>
  );
};

export default Footer;
