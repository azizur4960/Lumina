export default function AboutPage() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white text-center">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-amber mx-auto text-brand-ink/80 text-center">
          <h2 className="text-4xl font-serif text-brand-ink mb-8">Rooted in Tradition, Crafted for Tomorrow</h2>
          <p className="mb-6 leading-relaxed">
            Lumina was born out of a simple philosophy: food should not only taste incredible, but it should also bring people together. Founded in 2018 by Executive Chef Marcus Lin and restaurateur Elena Rossi, Lumina has grown from an intimate neighborhood bistro into one of the city's premier dining destinations.
          </p>
          <p className="mb-12 leading-relaxed">
            Our approach to cuisine is modern yet deeply respectful of classic techniques. We source 80% of our ingredients from farms within a 50-mile radius, ensuring that every dish accurately reflects the season and supports our local agricultural community.
          </p>

          <h3 className="text-3xl font-serif text-brand-ink mt-16 mb-6">The Culinary Team</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <div>
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6">
                 <img 
                   src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop" 
                   alt="Executive Chef" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <h4 className="text-xl font-serif text-brand-ink font-bold">Marcus Lin</h4>
               <p className="text-sm uppercase tracking-widest text-brand-accent mt-1 mb-4">Executive Chef</p>
            </div>
            <div>
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6">
                 <img 
                   src="https://images.unsplash.com/photo-1595273611465-b1a37c95e5fa?q=80&w=1974&auto=format&fit=crop" 
                   alt="Sommelier" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <h4 className="text-xl font-serif text-brand-ink font-bold">Elena Rossi</h4>
               <p className="text-sm uppercase tracking-widest text-brand-accent mt-1 mb-4">Wine Director & Co-Owner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
