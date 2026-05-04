export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop", // Bar
    "https://images.unsplash.com/photo-1560624052-449f5ddf0c77?q=80&w=2000&auto=format&fit=crop", // Food
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop", // Interior
    "https://images.unsplash.com/photo-1544025162-811c750e5e01?q=80&w=2000&auto=format&fit=crop", // Scallops
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", // Atmosphere
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2000&auto=format&fit=crop", // Steak
    "https://images.unsplash.com/photo-1555244162-803834f87a4d?q=80&w=2070&auto=format&fit=crop", // Catering
    "https://images.unsplash.com/photo-1536993139828-56af427a1a45?q=80&w=2000&auto=format&fit=crop", // Cocktail
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", // Table
  ];

  return (
    <div className="bg-brand-bg min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-ink mb-6">Gallery</h1>
          <p className="text-brand-muted max-w-2xl mx-auto">A glimpse into the Lumina experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden ${i % 4 === 0 ? "md:col-span-2 md:row-span-2 aspect-square lg:aspect-auto lg:h-[600px]" : "aspect-square"}`}>
              <img 
                src={src} 
                alt={`Gallery visual ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
