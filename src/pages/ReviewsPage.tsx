import { Star } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    { name: "Sarah M.", text: "Absolutely phenomenal dining experience. The scallops were cooked to perfection.", rating: 5, date: "October 2023", source: "Google Reviews" },
    { name: "James T.", text: "The perfect spot for our anniversary. Stunning ambiance and beautiful plating.", rating: 5, date: "September 2023", source: "Yelp" },
    { name: "Elena R.", text: "Best cocktails in the city. The service is impeccable from start to finish.", rating: 5, date: "August 2023", source: "Google Reviews" },
    { name: "Michael B.", text: "A hidden gem. The truffle arancini are a must-try. I will definitely be bringing out-of-town guests here.", rating: 5, date: "July 2023", source: "TripAdvisor" },
    { name: "Jessica W.", text: "Consistently excellent. I've dined here four times now and the quality of the ingredients always shines through.", rating: 5, date: "June 2023", source: "Yelp" },
    { name: "David K.", text: "Impeccable service. The sommelier helped us pick the perfect wine for our ribeye steak. 10/10.", rating: 5, date: "May 2023", source: "Google Reviews" }
  ];

  return (
    <div className="bg-[#fcfaf7] min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center text-brand-accent mb-4">
            {[...Array(5)].map((_, j) => <Star key={j} className="h-6 w-6 fill-current" />)}
          </div>
          <h1 className="text-5xl font-serif text-brand-ink mb-4">Guest Reviews</h1>
          <p className="text-brand-muted">Rated 4.9/5 based on over 500+ reviews.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-brand-border/40 shadow-sm">
              <div className="flex text-brand-accent mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-brand-ink/80 italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex justify-between items-end border-t border-brand-border/40 pt-4">
                 <div>
                   <div className="font-serif font-bold text-lg text-brand-ink">{r.name}</div>
                   <div className="text-xs text-brand-muted mt-1">{r.date}</div>
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-wider text-brand-ink/40 bg-brand-border/20 px-2 py-1 rounded">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
