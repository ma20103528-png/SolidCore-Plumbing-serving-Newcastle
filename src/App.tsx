import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Wrench, 
  Droplets, 
  Flame, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Stethoscope
} from 'lucide-react';
import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICE_AREAS = ["Newcastle", "Gateshead", "Sunderland", "Durham"];
const PHONE_NUMBER = "0191 731 2854";
const EMAIL = "support@solidcoreplumbing.co.uk";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-900 overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-brand-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Clock size={14} className="text-brand-400" /> Mon-Sat 8AM-8PM</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-400" /> Serving Newcastle & North East</span>
          </div>
          <div className="flex gap-6 font-medium">
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-brand-400 transition-colors">Emergency? Call {PHONE_NUMBER}</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-brand-500 p-2 rounded-lg text-white group-hover:bg-brand-600 transition-colors">
              <Wrench size={24} />
            </div>
            <div>
              <span className="text-xl font-display font-bold tracking-tight block leading-none">SOLIDCORE</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-500 leading-none">Plumbing & Heating</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#services" className="hover:text-brand-500 transition-colors">Services</a>
            <a href="#areas" className="hover:text-brand-500 transition-colors">Areas</a>
            <a href="#about" className="hover:text-brand-500 transition-colors">Why Us</a>
            <a 
              href="#contact" 
              className="bg-brand-500 text-white px-6 py-2.5 rounded-full hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 active:scale-95"
            >
              Book Repair
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4 font-medium">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#areas" onClick={() => setIsMenuOpen(false)}>Areas</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                <a href={`tel:${PHONE_NUMBER}`} className="text-brand-500 font-bold">Call Now: {PHONE_NUMBER}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full text-brand-600 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              Local Newcastle Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-6">
              Expert Repairs <br />
              <span className="text-brand-500">Built to Last.</span>
            </h1>
            <p className="text-lg text-brand-700 mb-8 max-w-lg leading-relaxed">
              Professional plumbing and heating services for Newcastle and surrounding areas. 
              From emergency leaks to full installations, we provide solid solutions at fair prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="flex items-center justify-center gap-3 bg-brand-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl group"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                Call 0191 731 2854
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-white border-2 border-brand-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-500 transition-all"
              >
                Request Quote
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 opacity-60">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-[10px]">
                <ShieldCheck size={16} className="text-brand-500" />
                Gas Safe Registered
              </div>
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-[10px]">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                5/5 Star Rated
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern plumbing repair"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
            </div>
            {/* Trust badge floating */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-50 p-3 rounded-full text-brand-500">
                  <Flame size={32} />
                </div>
                <div>
                  <div className="text-2xl font-bold font-display">Fast</div>
                  <div className="text-gray-500 text-sm">Response Times</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
            <div className="h-1.5 w-24 bg-brand-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Flame className="text-orange-500" />} 
              title="Boiler Services" 
              desc="Repairs, annual servicing, and new installations for all major makes and models."
            />
            <ServiceCard 
              icon={<Droplets className="text-blue-500" />} 
              title="Leak Repairs" 
              desc="Fast detection and repair of burst pipes, dripping taps, and hidden water leaks."
            />
            <ServiceCard 
              icon={<Wrench className="text-slate-600" />} 
              title="General Plumbing" 
              desc="Toilet repairs, sink installations, shower valves, and blocked drains."
            />
            <ServiceCard 
              icon={<ShieldCheck className="text-green-600" />} 
              title="Gas Safety" 
              desc="Landlord certificates and thorough gas safety inspections you can trust."
            />
            <ServiceCard 
              icon={<Stethoscope className="text-brand-500" />} 
              title="Diagnostics" 
              desc="Accurate fault finding utilizing the latest tech to save you time and money."
            />
            <ServiceCard 
              icon={<CheckCircle2 className="text-orange-600" />} 
              title="Heating Upgrades" 
              desc="Thermostat installations, smart home integration, and radiator replacements."
            />
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <div className="bg-brand-500 p-8 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm font-medium uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-900 p-8 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-sm font-medium uppercase tracking-widest">Local Trust</div>
              </div>
              <img src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 italic italic-small leading-tight">
              Honest, reliable, and <span className="text-brand-500 underline decoration-brand-200 underline-offset-8">local to Newcastle.</span>
            </h2>
            <p className="text-lg text-brand-700 space-y-4 leading-relaxed mb-8">
              At SolidCore Plumbing, we don’t believe in cutting corners. We provide high-standard plumbing and heating services across the North East with a focus on long-term reliability. Our engineers are Gas Safe registered and fully insured.
            </p>
            <ul className="space-y-4 mb-10">
              {["No hidden call-out fees", "Transparent fixed pricing", "Emergency 24/7 support availability", "Fully insured & DBS checked"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-brand-800">
                  <CheckCircle2 size={20} className="text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="tel:01917312854" className="inline-flex items-center gap-2 text-brand-900 font-bold border-b-2 border-brand-900 pb-1 hover:text-brand-500 hover:border-brand-500 transition-all">
              Talk to an expert today <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="areas" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/50 skew-x-12 transform translate-x-20 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Serving the North East</h2>
              <p className="text-brand-400 text-lg mb-10 max-w-md">
                Based in Newcastle, we cover a 25-mile radius including all major towns and cities in Tyne and Wear.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {SERVICE_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                    <MapPin size={18} className="text-brand-500" />
                    <span className="font-bold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 bg-brand-500 rounded-lg flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Response Guarantee</h4>
                    <p className="text-brand-400 text-sm">We aim to be at your doorstep within 2 hours for emergency calls in Newcastle and Gateshead.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 bg-brand-500 rounded-lg flex items-center justify-center text-white">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Local Engineers</h4>
                    <p className="text-brand-400 text-sm">Our team lives and works in the areas we serve, ensuring familiar faces and reliable local knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <ReviewCard 
              name="David M." 
              source="Whitley Bay" 
              text="SolidCore fixed my leaking boiler the same day I called. Very professional and tidy. Would highly recommend." 
            />
            <ReviewCard 
              name="Sarah L." 
              source="Jesmond" 
              text="Had a new bathroom suite fitted. The finish is amazing and the price was exactly what was quoted. Five stars." 
            />
            <ReviewCard 
              name="James P." 
              source="Gateshead" 
              text="Fast emergency response at 10 PM on a Saturday. Saved our kitchen from a massive flood. Thank you!" 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Get a Free Quote</h2>
            <p className="text-lg text-brand-700 mb-10">
              Need a repair or planning a project? Fill out the form or give us a call for a friendly chat and a no-obligation quote.
            </p>
            
            <div className="space-y-6">
              <ContactInfo icon={<Phone size={24} />} title="Call Us" value={PHONE_NUMBER} href={`tel:${PHONE_NUMBER}`} />
              <ContactInfo icon={<Mail size={24} />} title="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactInfo icon={<Clock size={24} />} title="Hours" value="Mon-Sat 8AM-8PM" />
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">Name</label>
                  <input type="text" className="w-full bg-brand-50 border-2 border-transparent focus:border-brand-500 focus:bg-white rounded-xl px-4 py-3 transition-all outline-none" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-brand-50 border-2 border-transparent focus:border-brand-500 focus:bg-white rounded-xl px-4 py-3 transition-all outline-none" placeholder="0191..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">Service Needed</label>
                <select className="w-full bg-brand-50 border-2 border-transparent focus:border-brand-500 focus:bg-white rounded-xl px-4 py-3 transition-all outline-none appearance-none">
                  <option>Emergency Repair</option>
                  <option>Boiler Service</option>
                  <option>Bathroom Installation</option>
                  <option>General Plumbing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-50 border-2 border-transparent focus:border-brand-500 focus:bg-white rounded-xl px-4 py-3 transition-all outline-none" placeholder="Tell us about the issue..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/30">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 p-2 rounded-lg text-white">
                <Wrench size={24} />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">SOLIDCORE</span>
            </div>
            <p className="text-brand-400 max-w-sm mb-6">
              Your reliable local plumbing and heating experts. Serving the North East with professional, solid repairs since 2009.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-500">Links</h4>
            <ul className="space-y-4 text-brand-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Online</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-500">Contact</h4>
            <ul className="space-y-4 text-brand-400">
              <li>Newcatle Upon Tyne</li>
              <li>{PHONE_NUMBER}</li>
              <li>{EMAIL}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-400 text-sm">© {new Date().getFullYear()} SolidCore Plumbing & Heating. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-brand-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl transition-all"
    >
      <div className="h-14 w-14 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-brand-700 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ReviewCard({ name, source, text }: { name: string, source: string, text: string }) {
  return (
    <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 relative">
      <div className="flex gap-1 mb-4 opacity-50">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-900 fill-brand-900" />)}
      </div>
      <p className="text-brand-800 italic mb-6 leading-relaxed">"{text}"</p>
      <div>
        <div className="font-bold text-brand-900">{name}</div>
        <div className="text-sm text-brand-500">{source}</div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
  const Card = href ? 'a' : 'div';
  return (
    <Card href={href} className={`flex items-center gap-6 p-4 rounded-2xl hover:bg-white transition-all group ${href ? 'cursor-pointer shadow-sm hover:shadow-md border border-transparent hover:border-brand-100' : ''}`}>
      <div className="h-12 w-12 bg-white rounded-xl shadow-inner flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-500 mb-0.5">{title}</div>
        <div className="text-xl font-bold font-display">{value}</div>
      </div>
    </Card>
  );
}
