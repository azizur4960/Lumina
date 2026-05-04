export default function BlogPage() {
  const posts = [
    {
      title: "The Perfect Pairings: A Guide to Our Autumn Wine List",
      excerpt: "Explore the philosophy behind our rotating wine list, and see what our Sommelier recommends for the upcoming harvest season.",
      date: "October 12, 2023",
      category: "Wine & Spirits"
    },
    {
      title: "Sourcing Local: Our Partnership with Green Valley Farms",
      excerpt: "We took a trip out to Green Valley to see exactly where our heirloom tomatoes and seasonal greens come from. Spoiler: it's beautiful.",
      date: "September 28, 2023",
      category: "Ingredients"
    },
    {
      title: " Behind the Scenes: Constructing the New Spring Menu",
      excerpt: "Executive Chef Marcus Lin walks us through his creative process for developing a new seasonal menu, from concept to final tasting.",
      date: "March 15, 2023",
      category: "Culinary"
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif text-brand-ink mb-16 border-b border-brand-border/60 pb-8">Lumina Journal</h1>
        
        <div className="space-y-16">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="flex gap-4 items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">{post.category}</span>
                <span className="text-xs text-brand-muted">{post.date}</span>
              </div>
              <h2 className="text-3xl font-serif text-brand-ink mb-4 group-hover:text-brand-accent transition-colors">{post.title}</h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <span className="text-sm border-b border-brand-ink pb-1 font-semibold uppercase tracking-wide">Read the Article</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
