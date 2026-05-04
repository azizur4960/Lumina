import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function CateringPage() {
  return (
    <div className="bg-[#EBE7DF] min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-ink mb-6">Lumina Catering</h1>
          <p className="text-brand-muted text-lg">Bring our award-winning cuisine to your office, home, or special venue.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-bg rounded-3xl p-8 flex flex-col items-center text-center">
            <h3 className="font-serif text-3xl text-brand-ink mb-4">Corporate Box Lunches</h3>
            <p className="text-brand-muted mb-8 leading-relaxed">Individually packaged gourmet meals perfect for office meetings and team offsites. Sandwiches, salads, and fresh baked goods.</p>
            <div className="font-serif text-xl text-brand-accent mb-6 mt-auto">From $24 / person</div>
          </div>
          
          <div className="bg-brand-ink text-brand-bg rounded-3xl p-8 flex flex-col items-center text-center -translate-y-4 shadow-xl">
            <h3 className="font-serif text-3xl mb-4">Family-Style Buffet</h3>
            <p className="text-brand-bg/80 mb-8 leading-relaxed">A beautifully presented spread of our signature dishes, ideal for home gatherings and casual wedding receptions.</p>
            <div className="font-serif text-xl border-t border-brand-bg/20 pt-6 mt-auto w-full">From $45 / person</div>
          </div>

          <div className="bg-brand-bg rounded-3xl p-8 flex flex-col items-center text-center">
            <h3 className="font-serif text-3xl text-brand-ink mb-4">Chef's Table Experience</h3>
            <p className="text-brand-muted mb-8 leading-relaxed">A full-service fine dining experience in your own dining room. Includes dedicated chef, waitstaff, and premium wine pairings.</p>
            <div className="font-serif text-xl text-brand-accent mb-6 mt-auto">Custom Quote</div>
          </div>
        </div>

        <div className="mt-20 text-center">
           <Button size="lg" asChild>
             <Link to="/contact">Request a Catering Quote</Link>
           </Button>
        </div>

      </div>
    </div>
  );
}
