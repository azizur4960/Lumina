import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-bg py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
        
        {/* Brand & Mission */}
        <div className="md:w-1/3">
          <Link to="/" className="text-3xl font-serif font-bold uppercase tracking-tight block mb-6">
            Lumina
          </Link>
          <p className="text-brand-bg/70 text-sm leading-relaxed mb-8 max-w-sm">
            Fresh flavors, warm hospitality, and a dining experience worth coming back for. Modern cuisine in the heart of the city.
          </p>
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 rounded-full border border-brand-bg/20 flex items-center justify-center text-brand-bg/80 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-brand-bg/20 flex items-center justify-center text-brand-bg/80 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-2/3">
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider text-brand-bg/90">Experience</h4>
            <ul className="space-y-4 text-sm text-brand-bg/70">
              <li><Link to="/menu" className="hover:text-brand-accent transition-colors">Menus</Link></li>
              <li><Link to="/reservations" className="hover:text-brand-accent transition-colors">Reservations</Link></li>
              <li><Link to="/order" className="hover:text-brand-accent transition-colors">Order Online</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-accent transition-colors">Gallery</Link></li>
              <li><Link to="/specials" className="hover:text-brand-accent transition-colors">Specials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider text-brand-bg/90">Restaurant</h4>
            <ul className="space-y-4 text-sm text-brand-bg/70">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link></li>
              <li><Link to="/events" className="hover:text-brand-accent transition-colors">Private Events</Link></li>
              <li><Link to="/catering" className="hover:text-brand-accent transition-colors">Catering</Link></li>
              <li><Link to="/gift-cards" className="hover:text-brand-accent transition-colors">Gift Cards</Link></li>
              <li><Link to="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider text-brand-bg/90">Visit</h4>
            <ul className="space-y-4 text-sm text-brand-bg/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-accent" />
                <span>123 Culinary Way<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-accent" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-accent" />
                <span>hello@luminarestaurant.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-brand-bg/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-bg/50">
        <p>&copy; {new Date().getFullYear()} Lumina Restaurant. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-brand-bg transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-brand-bg transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-brand-bg transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
