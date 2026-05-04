import { Button } from "../components/ui/Button";

export default function GiftCardsPage() {
  return (
    <div className="bg-brand-bg min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-serif text-brand-ink mb-6">Give the Gift of Great Dining.</h1>
            <p className="text-brand-muted leading-relaxed mb-8">
              Treat your friends, family, or colleagues to an unforgettable dining experience at Lumina. Our gift cards never expire and can be used for in-person dining or online orders.
            </p>
            
            <div className="space-y-6">
              <div className="p-8 border border-brand-border rounded-[32px] bg-white">
                <h3 className="font-serif text-2xl text-brand-ink mb-2">Digital Gift Card</h3>
                <p className="text-brand-muted text-sm mb-6">Sent instantly via email. Perfect for last-minute gifts.</p>
                <Button className="w-full">Purchase e-Gift Card</Button>
              </div>
              
              <div className="p-8 border border-brand-border rounded-[32px] bg-[#EBE7DF]">
                <h3 className="font-serif text-2xl text-brand-ink mb-2">Physical Gift Card</h3>
                <p className="text-brand-muted text-sm mb-6">Beautifully packaged and mailed via premium post.</p>
                <Button variant="outline" className="w-full">Order Physical Card</Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop" 
                  alt="Gift Cards"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-brand-ink text-brand-bg p-8 rounded-full h-40 w-40 flex items-center justify-center text-center shadow-xl">
               <span className="font-serif text-xl leading-tight">The Perfect<br/>Gift.</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
