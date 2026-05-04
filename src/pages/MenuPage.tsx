import { useState } from "react";
import { Button } from "../components/ui/Button";

// Menu Data structure
const menuData = {
  starters: [
    { name: "Charred Octopus", description: "Fingerling potatoes, chorizo emulsion, smoked paprika", price: "$22", tags: ["gf", "df"] },
    { name: "Truffle Arancini", description: "Wild mushroom risotto, fontina, black truffle aioli", price: "$16", tags: ["v"] },
    { name: "Burrata & Heirloom Tomato", description: "Basil pistou, aged balsamic, grilled sourdough", price: "$18", tags: ["v"] },
    { name: "Ahi Tuna Tartare", description: "Avocado, ponzu, sesame crisp, micro cilantro", price: "$24", tags: ["df"] },
  ],
  mains: [
    { name: "Seared Diver Scallops", description: "Sweet corn purée, crispy pancetta, Meyer lemon brown butter", price: "$38", tags: ["gf"], popular: true },
    { name: "Prime Bone-In Ribeye", description: "16oz, roasted garlic marrow butter, chimichurri", price: "$68", tags: ["gf"] },
    { name: "Pan-Roasted Branzino", description: "Artichoke barigoule, fennel, lemon beurre blanc", price: "$42", tags: ["gf"] },
    { name: "Hand-Rolled Pappardelle", description: "Slow-braised short rib ragù, Parmigiano-Reggiano, fresh herbs", price: "$28", tags: [] },
    { name: "Miso Glazed Eggplant", description: "Forbidden rice, bok choy, toasted scallion broth", price: "$26", tags: ["v", "vg", "gf", "df"] }
  ],
  desserts: [
    { name: "Vanilla Bean Panna Cotta", description: "Macerated seasonal berries, honeycomb, mint", price: "$12", tags: ["gf", "v"] },
    { name: "Dark Chocolate Tart", description: "Espelette salt, espresso chantilly, cocoa nibs", price: "$14", tags: ["v"] },
    { name: "Basque Cheesecake", description: "Caramelized top, sour cherry compote", price: "$13", tags: ["v"] }
  ],
  cocktails: [
    { name: "Smoked Ember", description: "Aged bourbon, vanilla smoke, black walnut bitters", price: "$18", tags: [], popular: true },
    { name: "Botanical Gin Fizz", description: "Empress gin, elderflower, cucumber, lemon, egg white", price: "$16", tags: [] },
    { name: "Spicy Mezcalita", description: "Mezcal, jalapeño agave, fresh lime, Tajín rim", price: "$17", tags: [] }
  ]
};

const TagKey = () => (
  <div className="flex flex-wrap justify-center gap-4 text-xs tracking-wider uppercase text-brand-muted mb-12">
    <span><strong className="text-brand-ink">V</strong> Vegetarian</span>
    <span><strong className="text-brand-ink">VG</strong> Vegan</span>
    <span><strong className="text-brand-ink">GF</strong> Gluten-Free</span>
    <span><strong className="text-brand-ink">DF</strong> Dairy-Free</span>
  </div>
);

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>("starters");

  return (
    <div className="bg-[#fcfaf7] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-ink mb-6">Our Menu</h1>
          <p className="text-brand-muted max-w-2xl mx-auto">
            A celebration of seasonal ingredients, crafted with modern techniques and inspired by local harvests.
          </p>
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-brand-border/60 pb-6">
          {(Object.keys(menuData) as Array<keyof typeof menuData>).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest font-semibold transition-colors ${
                activeCategory === cat 
                  ? "text-brand-accent border-b-2 border-brand-accent pb-1" 
                  : "text-brand-muted hover:text-brand-ink pb-1 border-b-2 border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <TagKey />

        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {menuData[activeCategory].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 border-b border-brand-border/30 pb-8 last:border-0 last:pb-0">
              <div className="sm:max-w-[70%]">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-2xl text-brand-ink">{item.name}</h3>
                  {item.popular && (
                     <span className="text-[10px] uppercase tracking-wider bg-brand-accent/10 py-1 px-2 text-brand-accent rounded-sm font-bold">Chef's Favorite</span>
                  )}
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase border border-brand-border text-brand-ink/60 px-1.5 py-0.5 rounded-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="font-serif text-2xl text-brand-ink mt-4 sm:mt-0">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center p-10 bg-brand-ink text-brand-bg rounded-3xl">
          <h3 className="font-serif text-3xl mb-4">Enjoy at Home</h3>
          <p className="text-brand-bg/80 mb-8 max-w-md mx-auto">Experience our full menu from the comfort of your home with our premium takeout packaging.</p>
          <Button variant="default" className="bg-brand-accent hover:bg-brand-accent-hover" asChild>
            <a href="/order">Start Online Order</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
