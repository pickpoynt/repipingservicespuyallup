import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often does a grease trap need to be cleaned in Charleston?",
    answer: "Charleston Water System (CWS) and other local municipalities typically require a 90-day cleaning cycle. However, if your trap reaches 25% capacity (grease and solids) before the 90-day mark, it must be pumped sooner to remain compliant."
  },
  {
    question: "What is the '25% rule' and why does it matter?",
    answer: "The 25% rule states that the total volume of grease and solids in a trap cannot exceed 25% of the total capacity. Beyond this point, the interceptor loses its efficiency, allowing fats and oils to enter the public sewer system, which can result in heavy surcharges and fines."
  },
  {
    question: "Do you provide the compliance manifest for CWS?",
    answer: "Yes. After every cleaning, we provide a waste manifest and a certificate of compliance. We maintain these records digitally so you can easily present them to health inspectors or utility representatives during audits."
  },
  {
    question: "Can I clean my own grease trap in Charleston?",
    answer: "While small, under-sink grease traps can technically be cleaned manually, commercial establishments are generally required to use a certified waste hauler for proper disposal and tracking. Self-cleaning often leads to compliance issues if the waste isn't disposed of at a licensed SC facility."
  },
  {
    question: "What happens if my grease trap overflows?",
    answer: "An overflow is an emergency that can lead to health code violations, foul odors, and sewage backups into your kitchen. We offer 24/7 emergency response in Charleston to pump out overflowing traps and clear grease-related clogs immediately."
  },
  {
    question: "Does regular maintenance prevent odors in my Charleston kitchen?",
    answer: "Absolutely. Odors are caused by the decomposition of trapped organic matter. Regular pumping prevents the accumulation of old grease, which is the primary source of 'kitchen sink smells' often found in the Lowcountry heat."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Charleston Grease Management FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Expert answers to common questions about grease trap compliance in the Lowcountry.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
