import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency sewer repair in Salem?",
    answer: "Yes. Our Salem teams are available 24/7 for technical main line diagnostics and localized restoration. We provide rapid support across Marion County and the Mid-Willamette Valley to stabilize your system."
  },
  {
    question: "What is trenchless sewer repair for Salem homes?",
    answer: "Trenchless repair, or CIPP lining, allows us to restore your sewer line without digging up your yard. We insert a resin-saturated liner into the existing pipe, which hardens into a durable, seamless new pipe."
  },
  {
    question: "Are your technicians licensed for Oregon sewer projects?",
    answer: "Absolutely. Our technicians are fully licensed master plumbers and sewer specialists who adhere strictly to Oregon building codes and Salem municipal standards."
  },
  {
    question: "How long does a typical main line restoration in Salem take?",
    answer: "Most trenchless sewer restorations can be completed in a single day. Conventional excavation may take longer, but our team focuses on rapid, high-performance results to minimize disruption."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Salem <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about sewer line repair and trenchless restoration in Salem, Oregon.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 text-left py-6 uppercase tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
