import { useState } from "react";
import { Button } from "../components/ui/Button";

export default function EventsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Private Event Setup"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Private Dining & Events</h1>
          <p className="text-lg md:text-xl text-white/90">
            From intimate gatherings to corporate dinners, our private spaces offer the perfect backdrop for your most important moments.
          </p>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-brand-ink">The Wine Room</h2>
              <p className="text-brand-muted text-lg tracking-wide uppercase text-sm font-semibold">Capacity: Up to 14 seated</p>
              <p className="text-brand-ink/80 leading-relaxed">
                Surrounded by our curated collection of vintage wines, this intimate space is perfect for executive dinners, milestone birthdays, and small celebrations. Features a dedicated serving team and customizable tasting menus.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-brand-ink">The Atrium</h2>
              <p className="text-brand-muted text-lg tracking-wide uppercase text-sm font-semibold">Capacity: Up to 45 seated / 60 cocktail</p>
              <p className="text-brand-ink/80 leading-relaxed">
                A stunning glass-enclosed space bathed in natural light by day and starlit by night. Ideal for rehearsal dinners, larger corporate events, and cocktail receptions. Complete with a private bar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-[#EBE7DF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-bg rounded-[40px] p-8 md:p-16 shadow-xl">
            {submitted ? (
               <div className="text-center py-16">
                <h2 className="text-3xl font-serif text-brand-ink mb-4">Inquiry Sent</h2>
                <p className="text-brand-muted">Our events coordinator will be in touch within 24 hours to discuss your event details.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-serif text-brand-ink mb-4">Event Inquiry</h2>
                  <p className="text-brand-muted">Fill out the details below and our team will help plan the perfect event.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-2 gap-6">
                     <input type="text" placeholder="First Name" required className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none" />
                     <input type="text" placeholder="Last Name" required className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none" />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                     <input type="email" placeholder="Email Address" required className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none" />
                     <input type="tel" placeholder="Phone Number" required className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none" />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                     <select className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg text-brand-ink/70 outline-none appearance-none">
                        <option value="">Event Type</option>
                        <option value="corporate">Corporate Dinner</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="wedding">Rehearsal / Wedding</option>
                        <option value="other">Other Occasion</option>
                     </select>
                     <input type="number" placeholder="Estimated Guest Count" required className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none" />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                     <input type="date" className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none text-brand-ink/70" />
                     <input type="time" className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none text-brand-ink/70" />
                   </div>
                   <textarea placeholder="Tell us more about your event..." rows={4} className="w-full bg-brand-border/20 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none resize-none"></textarea>
                   <Button type="submit" size="lg" className="w-full">Submit Inquiry</Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
