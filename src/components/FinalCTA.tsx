import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, SplitText } from './Reveal';

const IMG =
  'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=2000';

export function FinalCTA() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={IMG} alt="Elegant restaurant dining ambiance" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal-900/70" />
      </motion.div>

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <h2 className="font-display text-[10vw] font-light leading-[0.95] text-bone-50 sm:text-[7vw] lg:text-[5.5vw] xl:text-[88px]">
            <SplitText text="A table." />
            <br />
            <span className="italic text-brass-300">
              <SplitText text="A moment." delay={0.3} />
            </span>
            <br />
            <SplitText text="A memory." delay={0.6} />
          </h2>
        </Reveal>

        <Reveal delay={0.9}>
          <a
            href="#reservation"
            className="group mt-12 inline-flex items-center gap-3 bg-bone-50 px-10 py-5 text-[11px] font-medium tracking-ultra text-charcoal-900 transition-all hover:bg-brass-300"
          >
            VISIT MANTRAS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
