import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SlabLeakInfo from "@/components/landing/SlabLeakInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>slab leak repair asheville nc | Asheville Slab Leak Pros: Expert Detection & Repair</title>
        <meta name="description" content="Expert slab leak repair asheville nc. Professional leak detection, under-slab plumbing, and foundation water leak repairs. Licensed plumbers serving Buncombe County. Call (877) 792-1410 today!" />
        <meta name="keywords" content="slab leak repair asheville nc, leak detection Asheville, under slab plumbing repair NC, foundation leak repair Asheville, slab leak detection Western NC" />
        <link rel="canonical" href="https://slab-leak-repair-asheville-nc.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Asheville Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Asheville",
              "addressRegion": "NC",
              "postalCode": "28801",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.5951",
              "longitude": "-82.5515"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Asheville, North Dakota"
            },
            "priceRange": "$$$",
            "description": "Professional slab leak detection and repair services in Asheville, North Carolina. We use advanced acoustic technology to find and fix leaks beneath your foundation."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Asheville Slab Leak Pros",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Asheville, North Carolina"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leak Detection & Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Under-Slab Pipe Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Foundation Leak Diagnosis"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pipe Re-routing & Re-piping"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak repair asheville nc | Asheville Slab Leak Pros" />
        <meta property="og:description" content="Expert slab leak repair in Asheville, NC. Professional detection and repair of foundation water leaks using non-invasive technology. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-repair-asheville-nc.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="slab leak repair asheville nc | Asheville Slab Leak Pros" />
        <meta name="twitter:description" content="Professional slab leak repair in Asheville. Advanced detection and repair of under-slab plumbing issues." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SlabLeakInfo />
      <FAQ />
      <Contact />
      <RandomLinks />
      <Footer />
    </div>
  );
};

export default Index;


