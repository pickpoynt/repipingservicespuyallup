import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WestHempsteadPlumbingInfo from "@/components/landing/WestHempsteadPlumbingInfo";
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
        <title>plumber west hempstead ny West Hempstead NY</title>
        <meta name="description" content="plumber west hempstead ny West Hempstead NY - Precision plumbing repair, leak detection & infrastructure maintenance. 24/7 technical response for West Hempstead and Nassau County. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber west hempstead ny, West Hempstead plumber, plumbing repair West Hempstead, emergency plumber West Hempstead, Nassau County plumbing, Town of Hempstead plumber" />
        <link rel="canonical" href="https://west-hempstead-plumbing.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "West Hempstead Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1517527667690-0f8a3794b150?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "West Hempstead",
              "addressRegion": "NY",
              "postalCode": "11552",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.7048",
              "longitude": "-73.6501"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "West Hempstead, NY"
            },
            "priceRange": "$$",
            "description": "Professional residential and commercial plumbing services in West Hempstead, NY. We specialize in 24/7 emergency response, technical diagnostics, and high-performance plumbing care for Nassau County homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Plumbing Technology",
            "provider": {
              "@type": "LocalBusiness",
              "name": "West Hempstead Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "West Hempstead, NY"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "West Hempstead Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Performance Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nassau Emergency Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Infrastructure Support"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber west hempstead ny West Hempstead NY - West Hempstead Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in West Hempstead, NY. 24/7 technical restoration and maintenance for Town of Hempstead residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://west-hempstead-plumbing.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517527667690-0f8a3794b150?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber west hempstead ny West Hempstead NY
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">West Hempstead Plumbing Pros</span>
            </>
          }
          subtitle="West Hempstead's trusted authority for resilient home infrastructure. We provide precision diagnostics, technical repair, and 24/7 support for Nassau County. Engineering Excellence."
          image="https://images.unsplash.com/photo-1517646281602-7b9265436d40?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1504151932400-72d433433e33?auto=format&fit=crop&q=80&w=2000"
          badge="WEST HEMPSTEAD MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <WestHempsteadPlumbingInfo />
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
