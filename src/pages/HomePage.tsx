import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Star, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

const signatureDishes = [
  {
    name: "Seared Diver Scallops",
    description: "Sweet corn purée, crispy pancetta, micro-cilantro, Meyer lemon brown butter.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1544025162-811c750e5e01?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Prime Ribeye Steak",
    description: "16oz bone-in ribeye, bone marrow butter, roasted wild mushrooms, malbec reduction.",
    price: "$68",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Smoked Ember Cocktail",
    description: "Aged bourbon, vanilla smoke, black walnut bitters, flamed orange peel.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1536993139828-56af427a1a45?q=80&w=1000&auto=format&fit=crop",
  }
];

const reviews = [
  { name: "Sarah M.", text: "Absolutely phenomenal dining experience. The scallops were cooked to perfection.", rating: 5 },
  { name: "James T.", text: "The perfect spot for our anniversary. Stunning ambiance and beautiful plating.", rating: 5 },
  { name: "Elena R.", text: "Best cocktails in the city. The service is impeccable from start to finish.", rating: 5 }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
            alt="Warm modern restaurant interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center items-center gap-2 text-white mb-6">
              <span className="flex text-brand-accent">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </span>
              <span className="text-sm font-medium tracking-widest uppercase">Rated 4.9/5 by Local Diners</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] mb-6">
              Fresh Flavors.<br />Modern Dining.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Enjoy chef-crafted dishes, warm hospitality, and a beautiful dining experience in the heart of the city.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-ink" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Action / Trust Strip */}
      <section className="bg-brand-ink text-brand-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-brand-bg/10">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl text-brand-accent mb-1">Locally Loved</span>
              <span className="text-xs uppercase tracking-widest text-brand-bg/60">Community Favorite</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl text-brand-accent mb-1">Chef-Crafted</span>
              <span className="text-xs uppercase tracking-widest text-brand-bg/60">Seasonal Menus</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl text-brand-accent mb-1">Fresh Ingredients</span>
              <span className="text-xs uppercase tracking-widest text-brand-bg/60">Sourced Daily</span>
            </div>
            <div className="flex flex-col items-center hidden md:flex">
              <span className="font-serif text-2xl text-brand-accent mb-1">Award Winning</span>
              <span className="text-xs uppercase tracking-widest text-brand-bg/60">Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ink mb-4 text-balance">Our Signature Dishes</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Experience our culinary philosophy through these carefully crafted highlights from our seasonal menu.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {signatureDishes.map((dish, i) => (
              <motion.div 
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-brand-ink">{dish.name}</h3>
                  <span className="font-serif text-xl text-brand-accent">{dish.price}</span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">{dish.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/menu">Explore Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview (Split Layout) */}
      <section className="py-24 bg-[#EBE7DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-brand-ink mb-6 text-balance">Culinary Passion Meet Modern Elegance</h2>
              <p className="text-brand-ink/80 text-lg leading-relaxed mb-6">
                Founded on the belief that a great meal is more than just food—it's an experience. We blend classic culinary techniques with modern innovation to create dishes that surprise and delight.
              </p>
              <p className="text-brand-ink/80 text-lg leading-relaxed mb-10">
                Our kitchen is deeply rooted in the local community, sourcing the freshest ingredients daily to bring you pure, uncompromised flavors.
              </p>
              <Button asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chef plating food"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-bg p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-xl italic text-brand-ink">"A perfect balance of technique, taste, and tradition."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambiance/Experiences Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-serif text-brand-ink mb-4 text-balance">More Than Just Dining</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {/* Private Events */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[16/10]">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Private Events"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-serif text-white mb-3">Private Events</h3>
              <p className="text-white/80 mb-6 max-w-md">Host your next celebration, corporate dinner, or wedding rehearsal in our stunning private dining areas.</p>
              <Button variant="outline" className="w-fit border-white text-white hover:bg-white hover:text-brand-ink" asChild>
                <Link to="/events">Inquire Now</Link>
              </Button>
            </div>
          </div>
          
          {/* Catering */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[16/10]">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f87a4d?q=80&w=2070&auto=format&fit=crop" 
              alt="Catering"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-serif text-white mb-3">Elevated Catering</h3>
              <p className="text-white/80 mb-6 max-w-md">Bring the Lumina experience to your home or office with our bespoke catering packages.</p>
              <Button variant="outline" className="w-fit border-white text-white hover:bg-white hover:text-brand-ink" asChild>
                <Link to="/catering">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-brand-ink text-brand-bg text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-12 text-brand-accent">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex text-brand-accent mb-4">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-brand-bg/80 italic mb-6">"{r.text}"</p>
                <span className="font-serif text-lg">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Final CTA */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 rounded-[40px] overflow-hidden aspect-square relative bg-brand-border/30">
              {/* Fallback map placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.284347717616!2d-122.3957276843447!3d37.78345387975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807963bbf5ab%3A0xc6cb1dc21cc0d099!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false} 
                loading="lazy"
                title="Restaurant Location Map"
              ></iframe>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-5xl font-serif text-brand-ink mb-8">Hungry?<br/>Your table is waiting.</h2>
              
              <div className="space-y-6 mb-10 text-brand-ink/80">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 mt-1 text-brand-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-ink uppercase tracking-wider text-sm mb-1">Location</h4>
                    <p>123 Culinary Way<br/>San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 mt-1 text-brand-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-ink uppercase tracking-wider text-sm mb-1">Hours</h4>
                    <p>Mon - Thu: 5:00 PM - 10:00 PM<br/>Fri - Sat: 5:00 PM - 11:00 PM<br/>Sun: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/reservations">Book a Table</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/order">Order Takeout</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
