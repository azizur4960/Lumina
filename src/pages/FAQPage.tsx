import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function FAQPage() {
  const faqs = [
    { question: "Do you accept reservations?", answer: "Yes, we strongly recommend making reservations, especially for weekend dining. You can book a table directly through our website." },
    { question: "Can I order online?", answer: "Yes, we offer both takeout and delivery. Visit our Order Online page to view the menu and place your order." },
    { question: "Is parking available?", answer: "We offer complimentary valet parking starting at 5:00 PM. Alternatively, there is street parking available nearby." },
    { question: "Do you have vegetarian, vegan, or gluten-free options?", answer: "Absolutely. Our menu features several vegetarian and gluten-free dishes. We can also modify most dishes to be vegan upon request." },
    { question: "What is your cancellation policy?", answer: "We ask that you cancel at least 24 hours in advance. For parties of 6 or more, a cancellation fee may apply if cancelled within 24 hours." },
    { question: "Are kids welcome?", answer: "Yes, families are welcome. We have a dedicated children's menu available upon request." }
  ];

  return (
    <div className="bg-[#fcfaf7] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif text-brand-ink mb-12 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-border/60 pb-8">
              <h3 className="font-serif text-2xl text-brand-ink mb-3">{faq.question}</h3>
              <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-muted mb-6">Still have a question?</p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
