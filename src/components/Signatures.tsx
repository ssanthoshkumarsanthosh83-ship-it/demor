import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { signatureDishes } from '../data';
import { Reveal } from './Reveal';

export function Signatures() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-32 sm:py-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-brass-400" />
                <span className="text-[10px] font-medium tracking-ultra text-brass-300">FROM OUR KITCHEN</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl font-light text-bone-50 sm:text-6xl lg:text-7xl">
                Signatures
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                aria-label="Scroll left"
                onClick={() => scroll('left')}
                className="flex h-12 w-12 items-center justify-center border border-bone-50/20 text-bone-50 transition-colors hover:border-brass-400 hover:text-brass-300"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Scroll right"
                onClick={() => scroll('right')}
                className="flex h-12 w-12 items-center justify-center border border-bone-50/20 text-bone-50 transition-colors hover:border-brass-400 hover:text-brass-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:px-10"
      >
        {signatureDishes.map((dish) => (
          <motion.article
            key={dish.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative w-[80vw] flex-shrink-0 snap-start overflow-hidden sm:w-[420px] lg:w-[480px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <span className="font-display text-5xl font-light text-bone-50/30">{dish.number}</span>

              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                <p className="text-sm font-light leading-relaxed text-bone-100/80">
                  {dish.description}
                </p>
              </div>

              <div className="flex items-end justify-between">
                <h3 className="font-display text-2xl font-light text-bone-50 sm:text-3xl">
                  {dish.name}
                </h3>
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-bone-50/30 text-bone-50 transition-all duration-500 group-hover:border-brass-400 group-hover:bg-brass-400 group-hover:text-charcoal-900">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-ultra text-bone-50"
          >
            <span className="border-b border-bone-50/40 pb-0.5 transition-colors group-hover:border-brass-400">
              VIEW COMPLETE MENU
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
