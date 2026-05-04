import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function SpecialsPage() {
  return (
    <div className="bg-brand-bg min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-ink mb-16 text-center">Current Specials</h1>

        <div className="grid lg:grid-cols-2 gap-16 items-center border-b border-brand-border/60 pb-16 mb-16">
          <div className="aspect-[4/3] rounded-[32px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544025162-811c750e5e01?q=80&w=2000&auto=format&fit=crop" 
              alt="Seasonal Scallops"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">Spring Highlight</h4>
            <h2 className="text-4xl font-serif text-brand-ink mb-4">Diver Scallops & Sweet Corn</h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Available through May, our seared diver scallops are perfectly paired with a sweet corn purée, crispy pancetta, and Meyer lemon brown butter. A refreshing and savory start to your meal.
            </p>
            <Button asChild><Link to="/reservations">Reserve to Try It</Link></Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">Happy Hour</h4>
            <h2 className="text-4xl font-serif text-brand-ink mb-4">Golden Hour Cocktails</h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Join us at the bar Monday through Thursday from 4:00 PM to 6:00 PM. Enjoy half-priced signature cocktails and a special menu of shared plates including $2 oysters.
            </p>
            <Button variant="outline" asChild><Link to="/menu">View Bar Menu</Link></Button>
          </div>
          <div className="aspect-[4/3] rounded-[32px] overflow-hidden order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1536993139828-56af427a1a45?q=80&w=2000&auto=format&fit=crop" 
              alt="Craft Cocktail"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
