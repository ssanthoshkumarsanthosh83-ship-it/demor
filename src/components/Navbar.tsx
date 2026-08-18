import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-charcoal-900/10 bg-bone-50/95 backdrop-blur-xl py-4'
            : 'border-b border-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-10">
          <a href="#home" className="group flex flex-col leading-none">
            <span
              className={`font-display text-2xl font-medium tracking-wide transition-colors ${
                scrolled ? 'text-charcoal-900' : 'text-bone-50'
              }`}
            >
              MANTRAS
            </span>
            <span
              className={`mt-0.5 text-[9px] font-light tracking-ultra transition-colors ${
                scrolled ? 'text-brass-600' : 'text-bone-200/70'
              }`}
            >
              PURE VEGETARIAN
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative text-[11px] font-medium tracking-ultra transition-colors ${
                    scrolled ? 'text-charcoal-600 hover:text-charcoal-900' : 'text-bone-100/80 hover:text-bone-50'
                  }`}
                >
                  {link.label.toUpperCase()}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brass-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#reservation"
              className={`group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-ultra transition-colors ${
                scrolled ? 'text-charcoal-900' : 'text-bone-50'
              }`}
            >
              RESERVE
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
              scrolled ? 'text-charcoal-900' : 'text-bone-50'
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal-900 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-2xl text-bone-50">MANTRAS</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-bone-50">
                <X className="h-7 w-7" />
              </button>
            </div>
            <ul className="mt-12 flex flex-col px-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="border-b border-bone-50/10"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-3xl text-bone-50"
                  >
                    {link.label}
                    <ArrowUpRight className="h-5 w-5 text-brass-400" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 px-6">
              <a
                href="#reservation"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 border border-brass-400 px-8 py-4 text-xs font-medium tracking-ultra text-brass-300"
              >
                RESERVE A TABLE <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
