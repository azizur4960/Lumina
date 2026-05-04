import { Button } from "../components/ui/Button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent!");
  };

  return (
    <div className="bg-brand-bg min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-ink mb-6">Contact Us</h1>
          <p className="text-brand-muted max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions about reservations, private events, or dietary requirements.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="bg-[#EBE7DF] rounded-[40px] p-10 md:p-14 h-full">
               <h2 className="text-3xl font-serif text-brand-ink mb-10">Get in Touch</h2>
               
               <div className="space-y-8">
                 <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Location</h3>
                   <p className="text-xl font-serif text-brand-ink">123 Culinary Way<br />San Francisco, CA 94107</p>
                 </div>
                 
                 <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Hours</h3>
                   <ul className="text-xl font-serif text-brand-ink space-y-1">
                     <li className="flex justify-between max-w-xs"><span>Mon - Thu</span><span>5pm - 10pm</span></li>
                     <li className="flex justify-between max-w-xs"><span>Fri - Sat</span><span>5pm - 11pm</span></li>
                     <li className="flex justify-between max-w-xs"><span>Sunday</span><span>4pm - 9pm</span></li>
                   </ul>
                 </div>
                 
                 <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Contact</h3>
                   <p className="text-xl font-serif text-brand-ink">
                     <a href="tel:5551234567" className="hover:text-brand-accent transition-colors block mb-1">(555) 123-4567</a>
                     <a href="mailto:hello@luminarestaurant.com" className="hover:text-brand-accent transition-colors">hello@luminarestaurant.com</a>
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-0 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-xl outline-none" />
                <input type="text" placeholder="Last Name" required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-0 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-xl outline-none" />
              </div>
              <input type="email" placeholder="Email Address" required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-0 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-xl outline-none" />
              <select className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-0 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-xl outline-none text-brand-ink/70">
                <option value="">Subject</option>
                <option value="reservation">Reservation Inquiry</option>
                <option value="feedback">Diner Feedback</option>
                <option value="press">Press / Media</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Your Message" rows={5} required className="w-full bg-transparent border-0 border-b-2 border-brand-ink/20 px-0 py-3 focus:ring-0 focus:border-brand-accent transition-colors font-serif text-xl outline-none resize-none"></textarea>
              
              <Button type="submit" size="lg" className="w-full md:w-auto px-12 mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
