import { useState } from "react";
import { Button } from "../components/ui/Button";

const orderCategories = ["Specials", "Starters", "Mains", "Sides", "Desserts", "Beverages"];

const orderItems = [
  { id: 1, category: "Starters", name: "Crispy Calamari", price: 16, description: "Lemon aioli, pickled peppers" },
  { id: 2, category: "Starters", name: "Burrata", price: 18, description: "Heirloom tomato, basil, sourdough" },
  { id: 3, category: "Mains", name: "Roasted Half Chicken", price: 32, description: "Herb jus, fingerling potatoes, seasonal greens" },
  { id: 4, category: "Mains", name: "Pan-Seared Salmon", price: 36, description: "Quinoa, asparagus, lemon dill sauce" },
  { id: 5, category: "Mains", name: "Vegan Mushroom Risotto", price: 26, description: "Wild mushrooms, truffle oil, cashew cream" },
  { id: 6, category: "Specials", name: "Truffle Burger", price: 24, description: "Wagyu patty, truffle cheese, brioche bun, fries" },
  { id: 7, category: "Desserts", name: "Chocolate Lava Cake", price: 12, description: "Served with vanilla bean ice cream" },
];

export default function OrderPage() {
  const [activeCat, setActiveCat] = useState("Mains");
  const [cart, setCart] = useState<Array<any>>([]);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };
  
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-[#fcfaf7] min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-ink mb-4">Order Online</h1>
          <p className="text-brand-muted">Freshly prepared. Easy pickup. Available for delivery.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Menu Area */}
          <div className="lg:w-2/3">
             {/* Categories */}
             <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar gap-4">
               {orderCategories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCat(cat)}
                   className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${
                     activeCat === cat 
                       ? "bg-brand-ink text-white"
                       : "bg-brand-border/30 text-brand-ink hover:bg-brand-border/60"
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>

             {/* Items */}
             <div className="grid sm:grid-cols-2 gap-6">
               {orderItems.filter(item => item.category === activeCat).map(item => (
                 <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-brand-border/40 flex flex-col justify-between">
                   <div>
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="font-serif text-xl font-bold text-brand-ink">{item.name}</h3>
                       <span className="font-semibold text-brand-accent">${item.price}</span>
                     </div>
                     <p className="text-sm text-brand-muted mb-6">{item.description}</p>
                   </div>
                   <Button onClick={() => addToCart(item)} variant="outline" className="w-full mt-auto">Add to Order</Button>
                 </div>
               ))}
               {orderItems.filter(item => item.category === activeCat).length === 0 && (
                 <div className="col-span-full text-center py-12 text-brand-muted border-2 border-dashed border-brand-border rounded-3xl">
                   Sold out today. Please check back later.
                 </div>
               )}
             </div>
          </div>

          {/* Cart Area */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-[32px] p-8 shadow-xl sticky top-32">
               <h2 className="text-2xl font-serif font-bold text-brand-ink mb-6">Your Order</h2>
               
               {cart.length === 0 ? (
                 <div className="text-center py-8 text-brand-muted/70 flex flex-col items-center">
                    <svg className="w-12 h-12 mb-4 text-brand-border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    <p>Your cart is empty.</p>
                 </div>
               ) : (
                 <>
                   <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2">
                     {cart.map((item, idx) => (
                       <div key={idx} className="flex justify-between text-sm">
                         <div>
                           <span className="font-semibold text-brand-ink">{item.name}</span>
                         </div>
                         <span className="text-brand-muted">${item.price}</span>
                       </div>
                     ))}
                   </div>
                   
                   <div className="border-t border-brand-border/50 pt-4 mb-6">
                     <div className="flex justify-between text-sm mb-2 text-brand-muted">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-sm mb-2 text-brand-muted">
                        <span>Taxes & Fees</span>
                        <span>${(cartTotal * 0.08).toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-xl font-serif font-bold mt-4 text-brand-ink">
                        <span>Total</span>
                        <span>${(cartTotal * 1.08).toFixed(2)}</span>
                     </div>
                   </div>

                   <Button className="w-full" size="lg">Checkout</Button>
                 </>
               )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
