export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-navy-deep py-20 border-t border-navy-deep/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand Side */}
        <div className="space-y-6 max-w-sm">
          <h2 className="text-4xl font-serif font-bold text-navy-deep dark:text-white">LIZ WAKESHO</h2>
          <p className="text-navy-deep/60 dark:text-white/60 leading-relaxed">
            A leader for the people, a visionary for the mind, and an advocate for the future.
          </p>
          <div className="flex gap-4">
             {/* Replace with your social icons */}
             <div className="w-10 h-10 rounded-full bg-gold-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">IN</div>
             <div className="w-10 h-10 rounded-full bg-gold-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">X</div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-tighter text-gold-accent">The Vision</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:text-gold-accent cursor-pointer transition-colors">Politician</li>
              <li className="hover:text-gold-accent cursor-pointer transition-colors">CEO of Trelio</li>
              <li className="hover:text-gold-accent cursor-pointer transition-colors">Model</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-tighter text-gold-accent">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:text-gold-accent cursor-pointer transition-colors">Bookings</li>
              <li className="hover:text-gold-accent cursor-pointer transition-colors">Press Kit</li>
              <li className="hover:text-gold-accent cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Monolithic Signature Backdrop */}
<div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
  <h1 className="text-[19vw] font-black text-navy-deep/[0.03] dark:text-white/[0.03] leading-none text-center tracking-tighter">
    WAKESHO
  </h1>
</div>
    </footer>
  );
}