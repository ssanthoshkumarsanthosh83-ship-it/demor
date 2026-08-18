import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, SplitText } from './Reveal';

const IMG =
  'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function FeaturedExperience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-bone-50">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[400px] overflow-hidden lg:min-h-[700px]"
        >
          <img src={IMG} alt="Traditional South Indian thali meal" className="h-full w-full object-cover" />
        </motion.div>

        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 lg:py-32">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-brass-500" />
              <span className="text-[10px] font-medium tracking-ultra text-brass-600">THE MANTRAS EXPERIENCE</span>
            </div>
          </Reveal>

          <h2 className="mt-8 font-display text-4xl font-light leading-[1.1] text-charcoal-900 sm:text-5xl lg:text-6xl">
            <SplitText text="Tradition, served" />
            <br />
            <span className="italic text-brass-600">
              <SplitText text="beautifully." delay={0.3} />
            </span>
          </h2>

          <Reveal delay={0.5}>
            <p className="mt-10 max-w-md text-base font-light leading-loose text-charcoal-600">
              From the first aroma of freshly prepared dosa to the final sip of
              filter coffee, every visit is designed to be a memorable vegetarian
              dining experience.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <a
              href="#story"
              className="group mt-10 inline-flex items-center gap-2 text-[11px] font-medium tracking-ultra text-charcoal-900"
            >
              <span className="border-b border-charcoal-900 pb-0.5 transition-colors group-hover:border-brass-500">
                EXPLORE OUR STORY
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
