import { useState } from "react";
import { Button } from "../components/ui/Button";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-[#EBE7DF] min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Form Side */}
          <div className="bg-brand-bg rounded-[40px] p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="text-center py-16 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-serif text-brand-ink mb-4">Request Received</h2>
                <p className="text-brand-muted mb-8 text-balance">
                  Thank you. We have received your reservation request and will send a confirmation email shortly.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Book Another Table</Button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center">
                  <h1 className="text-4xl md:text-5xl font-serif text-brand-ink mb-4">Reserve a Table</h1>
                  <p className="text-brand-muted text-sm uppercase tracking-widest">Select your details below</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest font-semibold text-brand-ink/80 block">Date</label>
                       <input type="date" required className="w-full bg-brand-border/30 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest font-semibold text-brand-ink/80 block">Time</label>
                       <select required className="w-full bg-brand-border/30 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none appearance-none">
                          <option value="17:00">5:00 PM</option>
                          <option value="17:30">5:30 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30" disabled>6:30 PM (Fully Booked)</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                       </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest font-semibold text-brand-ink/80 block">Party Size</label>
                       <select required className="w-full bg-brand-border/30 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none appearance-none">
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6 People</option>
                          <option value="large">7+ (Call for large groups)</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest font-semibold text-brand-ink/80 block">Seating</label>
                       <select className="w-full bg-brand-border/30 border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-lg outline-none appearance-none">
                          <option value="any">Any Available</option>
                          <option value="indoor">Indoor Dining</option>
                          <option value="outdoor">Patio (Outdoor)</option>
                          <option value="bar">Bar Seating</option>
                       </select>
                    </div>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-brand-border/40">
                     <div className="space-y-2">
                       <input type="text" placeholder="Full Name" required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors placeholder:text-brand-ink/40 font-serif text-xl outline-none" />
                    </div>
                     <div className="space-y-2">
                       <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors placeholder:text-brand-ink/40 font-serif text-xl outline-none" />
                    </div>
                     <div className="space-y-2">
                       <input type="tel" placeholder="Phone Number" required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors placeholder:text-brand-ink/40 font-serif text-xl outline-none" />
                    </div>
                    <div className="space-y-2">
                       <textarea placeholder="Special Requests (Allergies, Anniversaries, etc.)" rows={3} className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-4 py-3 focus:ring-0 focus:border-brand-accent transition-colors placeholder:text-brand-ink/40 font-serif text-lg outline-none resize-none"></textarea>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-8">Confirm Reservation</Button>
                </form>
              </>
            )}
          </div>

          {/* Info Side */}
          <div className="order-first md:order-last">
             <div className="rounded-[40px] overflow-hidden aspect-[4/3] mb-10">
               <img 
                 src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                 alt="Restaurant Dining Area"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             
             <div className="bg-brand-ink text-brand-bg p-8 rounded-3xl">
                <h3 className="font-serif text-2xl mb-4">Dining Policies</h3>
                <ul className="space-y-4 text-brand-bg/80 text-sm">
                  <li className="flex gap-3"><span className="text-brand-accent">✦</span> Weekend dinner slots fill quickly. We recommend booking at least a week in advance.</li>
                  <li className="flex gap-3"><span className="text-brand-accent">✦</span> We hold tables for 15 minutes past the reservation time.</li>
                  <li className="flex gap-3"><span className="text-brand-accent">✦</span> For parties of 7 or more, please contact us directly at (555) 123-4567 to arrange a large group booking or private dining experience.</li>
                  <li className="flex gap-3"><span className="text-brand-accent">✦</span> Walk-ins are welcome at the bar area on a first-come, first-served basis.</li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
