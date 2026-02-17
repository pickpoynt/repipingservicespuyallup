import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import NorwalkPlumbingInfo from "@/components/landing/NorwalkPlumbingInfo";
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
        <title>plumbers norwalk ct</title>
        <meta name="description" content="plumbers norwalk ct - Trusted residential and commercial plumbing services in Norwalk, CT. Emergency repairs, water heaters, and drain cleaning. Call (877) 792-1410." />
        <meta name="keywords" content="plumbers norwalk ct, Norwalk plumbing, emergency plumber Norwalk, water heater repair Norwalk, drain cleaning Fairfield County" />
        <link rel="canonical" href="https://plumbers-norwalk-ct.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Plumber Norwalk CT Pros",
            "image": "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Norwalk",
              "addressRegion": "CT",
              "postalCode": "06850",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.1176",
              "longitude": "-73.4079"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Norwalk, CT"
            },
            "priceRange": "$$",
            "description": "Professional plumbing services in Norwalk, Connecticut. Specialized in leak detection, water heater repair, and emergency plumbing for residential and commercial properties."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Plumber Norwalk CT Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Norwalk, Connecticut"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Norwalk Plumbing Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leak Detection"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumbers norwalk ct - Plumber Norwalk CT Pros" />
        <meta property="og:description" content="Expert plumbing services in Norwalk, CT. Rapid response for emergencies, leaks, and installations in Fairfield County." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumbers-norwalk-ct.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumbers norwalk ct
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Plumber Norwalk CT Pros</span>
            </>
          }
          subtitle="Norwalk's trusted plumbing authorities. Delivering top-rated residential and commercial plumbing solutions. Serving South Norwalk, Rowayton, and beyond with excellence."
          image="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          badge="NORWALK LICENSED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <NorwalkPlumbingInfo />
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
