import { motion } from 'framer-motion';
import { Reveal, SplitText } from './Reveal';

const INTRO_IMG =
  'https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg?auto=compress&cs=tinysrgb&w=1000';

export function Introduction() {
  return (
    <section id="story" className="relative overflow-hidden bg-bone-50 py-32 sm:py-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-brass-500" />
                <span className="text-[10px] font-medium tracking-ultra text-brass-600">INTRODUCTION</span>
              </div>
            </Reveal>

            <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] text-charcoal-900 sm:text-5xl lg:text-6xl">
              <SplitText text="Simple ingredients." />
              <br />
              <span className="italic text-brass-600">
                <SplitText text="Extraordinary flavour." delay={0.3} />
              </span>
            </h2>

            <Reveal delay={0.5}>
              <div className="editorial-line mt-10 max-w-md" />
            </Reveal>

            <Reveal delay={0.6}>
              <p className="mt-10 max-w-md text-base font-light leading-loose text-charcoal-600">
                Mantras serves authentic vegetarian cuisine inspired by the culinary
                traditions of South India. Every dish is prepared from scratch —
                batter fermented overnight, spices ground fresh each morning, and
                vegetables sourced locally. The result is food that is honest,
                wholesome and unmistakably homemade.
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <p className="mt-6 max-w-md text-base font-light leading-loose text-charcoal-600">
                From the crisp snap of a ghee roast dosa to the quiet comfort of a
                banana-leaf meal, we believe great vegetarian food does not need to
                be complicated — it only needs to be made with care.
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <a
                href="#experience"
                className="group mt-10 inline-flex items-center gap-2 text-[11px] font-medium tracking-ultra text-charcoal-900"
              >
                <span className="border-b border-charcoal-900 pb-0.5 transition-colors group-hover:border-brass-500">
                  THE MANTRAS EXPERIENCE
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden lg:absolute lg:-right-10 lg:-top-10 lg:h-[120%] lg:w-[90%]"
            >
              <img
                src={INTRO_IMG}
                alt="Traditional South Indian dosa with coconut chutney"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="hidden lg:block lg:h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
