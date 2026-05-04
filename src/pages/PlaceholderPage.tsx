export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-serif text-center">{title}</h1>
      <p className="text-center mt-4 text-brand-muted">This page is under construction.</p>
    </div>
  );
}
