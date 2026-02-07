import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import GreaseTrapInfo from "@/components/landing/GreaseTrapInfo";
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
        <title>Grease trap cleaning Charleston | Charleston Grease Trap Pros: Certified Pumping</title>
        <meta name="description" content="Certified Grease trap cleaning Charleston. Professional grease interceptor pumping, maintenance, and FOG compliance. Serving Charleston, SC restaurants and commercial kitchens. Call (877) 792-1410 today!" />
        <meta name="keywords" content="Grease trap cleaning Charleston, grease interceptor pumping Charleston SC, restaurant grease trap maintenance, Charleston FOG compliance, commercial kitchen grease removal" />
        <link rel="canonical" href="https://grease-trap-cleaning-charleston.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Charleston Grease Trap Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Charleston",
              "addressRegion": "SC",
              "postalCode": "29401",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7765",
              "longitude": "-79.9311"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Charleston, South Carolina"
            },
            "priceRange": "$$",
            "description": "Professional grease trap cleaning and interceptor maintenance services in Charleston, SC. We specialize in FOG compliance for restaurants and commercial kitchens."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Grease Trap Cleaning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Charleston Grease Trap Pros",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Charleston, South Carolina"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Grease Management Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Grease Trap Pumping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Grease Interceptor Maintenance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FOG Program Compliance Documentation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Grease Backup Cleaning"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Grease trap cleaning Charleston | Charleston Grease Trap Pros" />
        <meta property="og:description" content="Expert grease trap cleaning in Charleston, SC. Certified pumping and FOG compliance for restaurants. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grease-trap-cleaning-charleston.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Grease trap cleaning Charleston
              <span className="block text-blue-400 mt-2">Charleston Kitchen Experts: Certified FOG Solutions</span>
            </>
          }
          subtitle="Keep your Charleston kitchen running smoothly and stay compliant with CWS and local FOG regulations. We provide professional grease trap pumping, comprehensive cleaning, and certified disposal for restaurants and commercial food facilities across the Lowcountry."
          image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <GreaseTrapInfo />
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
