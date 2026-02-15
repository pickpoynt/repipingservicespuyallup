import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CharlottePlumbingInfo from "@/components/landing/CharlottePlumbingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>plumber charlotte nc Charlotte NC</title>
        <meta name="description" content="plumber charlotte nc Charlotte NC. Expert plumbing repair, leak detection, and master drain services in Charlotte, NC. 24/7 emergency response and precision diagnostics. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber charlotte nc, Charlotte plumbers, emergency plumber Charlotte, drain cleaning Charlotte, plumbing repair NC, Queen City plumbing" />
        <link rel="canonical" href="https://charlotte-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Charlotte Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1490151700639-6500772702f3?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Charlotte",
              "addressRegion": "NC",
              "postalCode": "28202",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.2271",
              "longitude": "-80.8431"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Charlotte, NC"
            },
            "priceRange": "$$",
            "description": "Professional residential and commercial plumbing services in Charlotte, NC. We specialize in rapid emergency response, leak detection, and Mastercrafter drain restoration across Mecklenburg County."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Plumbing & Drain Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Charlotte Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Charlotte, NC"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Maintenance & Repair",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Pipe Burst Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Tech Leak Pinpointing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mecklenburg Drain Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Water Line Installation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber charlotte nc - Charlotte's Master Plumbing Authority" />
        <meta property="og:description" content="Expert plumbing and drain services in the Queen City. Rapid 24/7 response for CLT homeowners. Professional Infrastructure Quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://charlotte-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1490151700639-6500772702f3?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber charlotte nc
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Charlotte Plumbing Pros</span>
            </>
          }
          subtitle="Charlotte's trusted authority for high-performance infrastructure. We provide advanced leak detection, master drain restoration, and precision emergency repair. Professional Quality Mastercraft."
          image="https://images.unsplash.com/photo-1490151700639-6500772702f3?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80"
          badge="CHARLOTTE MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <CharlottePlumbingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
