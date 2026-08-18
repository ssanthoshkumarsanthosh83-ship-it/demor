import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-900 pt-24 pb-8">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <Reveal>
            <div>
              <h3 className="font-display text-6xl font-light text-bone-50 sm:text-7xl">MANTRAS</h3>
              <p className="mt-3 text-[10px] font-light tracking-ultra text-brass-400">
                PURE VEGETARIAN · KILPAUK
              </p>
              <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-bone-100/50">
                Authentic vegetarian flavours crafted with tradition. Where timeless
                South Indian flavours meet a contemporary dining experience.
              </p>
              <div className="mt-8 flex gap-4">
                {[
                  { Icon: Instagram, label: 'Instagram', href: '#' },
                  { Icon: Facebook, label: 'Facebook', href: '#' },
                  { Icon: GoogleIcon, label: 'Google', href: 'https://www.google.com/search?q=Mantras+Pure+Veg+Kilpauk' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-bone-50/15 text-bone-100/50 transition-all hover:border-brass-400 hover:text-brass-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-[10px] font-medium tracking-ultra text-bone-200/40">NAVIGATION</p>
              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-light text-bone-100/70 transition-colors hover:text-brass-300"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-[10px] font-medium tracking-ultra text-bone-200/40">CONTACT</p>
              <div className="mt-6 space-y-4">
                <p className="text-sm font-light leading-relaxed text-bone-100/70">
                  65, Ormes Road, Kilpauk<br />
                  Chennai, Tamil Nadu – 600010
                </p>
                <a href="tel:08489944449" className="block font-display text-2xl font-light text-bone-50 transition-colors hover:text-brass-300">
                  084899 44449
                </a>
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 border border-brass-400 px-6 py-3 text-[10px] font-medium tracking-ultra text-brass-300 transition-all hover:bg-brass-400 hover:text-charcoal-900"
                >
                  RESERVE A TABLE <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-bone-50/10 pt-8 sm:flex-row">
          <p className="text-[11px] font-light tracking-wide text-bone-200/40">
            © 2026 MANTRAS PURE VEG. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] font-light tracking-wide text-bone-200/30">
            Client demonstration website.
          </p>
        </div>
      </div>
    </footer>
  );
}
