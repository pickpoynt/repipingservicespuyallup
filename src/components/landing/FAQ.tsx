import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is a slab leak?",
    answer: "A slab leak occurs when the water lines (either incoming pressure lines or outgoing drain lines) located beneath your home's concrete foundation develop a leak. These are dangerous because they are hidden from view and can compromise your foundation's structural integrity."
  },
  {
    question: "What are the common signs of a slab leak in Asheville?",
    answer: "Common indicators include hot spots on your floor, the sound of running water when faucets are off, unexplained dampness or mold on baseboards, a sudden spike in your Asheville water bill, or cracks forming in your foundation or walls."
  },
  {
    question: "Do you use non-destructive detection methods?",
    answer: "Yes. We use advanced electronic acoustic listening devices and thermal imaging technology to pinpoint the leak location through the concrete. This allows us to identify the exact spot for repair, preventing unnecessary damage to your flooring."
  },
  {
    question: "How much does slab leak repair cost in Asheville?",
    answer: "Detection typically costs between $250 and $600. Repair costs vary depending on the leak location and method (spot repair vs. re-routing), typically ranging from $1,500 to $4,000. We provide upfront estimates before any work begins."
  },
  {
    question: "Will my homeowners insurance cover the repair?",
    answer: "Most Asheville policies cover the 'access' and 'repair to property' caused by the leak, though they may not cover the specific pipe repair itself. We provide comprehensive documentation and photos to help you successfully file your claim."
  },
  {
    question: "How long does the detection and repair process take?",
    answer: "Most leaks can be detected within 1-2 hours. A standard direct-access repair usually takes 1 business day, while more complex re-routing may take 2-3 days."
  },
  {
    question: "What causes slab leaks in Western North Carolina?",
    answer: "Local factors include clay soil expansion and contraction, mountain terrain shifting, and the corrosive nature of some local water supplies on older copper piping systems."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Leak Detection & Repair FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Answers to common questions about slab leaks and foundation plumbing in Asheville.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors">
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
