import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { testimonials } from '../data';
import { Reveal, SplitText } from './Reveal';

export function Reviews() {
  const [index, setIndex] = useState(0);

  const go = (dir: -1 | 1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="reviews" className="relative overflow-hidden bg-bone-50 py-32 sm:py-44">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brass-500" />
              <span className="text-[10px] font-medium tracking-ultra text-brass-600">GUEST STORIES</span>
              <span className="h-px w-12 bg-brass-500" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl font-light text-charcoal-900 sm:text-6xl">
              <SplitText text="Loved by Guests" />
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-7xl font-light text-charcoal-900 sm:text-8xl">4.7</span>
              <div className="text-left">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brass-500 text-brass-500" />
                  ))}
                </div>
                <p className="mt-1 text-[10px] font-medium tracking-ultra text-charcoal-400">
                  6,000+ GOOGLE REVIEWS
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mx-auto max-w-3xl font-display text-3xl font-light italic leading-snug text-charcoal-800 sm:text-4xl lg:text-5xl">
                “{current.quote}”
              </p>
              <div className="mt-10 flex flex-col items-center gap-1">
                <p className="text-sm font-medium text-charcoal-900">{current.name}</p>
                <p className="text-[10px] font-light tracking-ultra text-charcoal-400">{current.detail.toUpperCase()}</p>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-charcoal-700 transition-colors hover:border-brass-500 hover:text-brass-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all ${i === index ? 'w-8 bg-brass-500' : 'w-4 bg-charcoal-200'}`}
              />
            ))}
          </div>
          <button
            aria-label="Next review"
            onClick={() => go(1)}
            className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-charcoal-700 transition-colors hover:border-brass-500 hover:text-brass-600"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-[11px] font-light tracking-wide text-charcoal-400">
            Sample demo testimonials for this presentation. Live reviews will be connected to Google at launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
