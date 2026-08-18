import { motion } from 'framer-motion';
import { Reveal, SplitText } from './Reveal';

const features = [
  { number: '01', title: 'Pure Vegetarian', desc: 'A dedicated pure-veg kitchen. No compromises.' },
  { number: '02', title: 'Freshly Prepared', desc: 'Made to order. Batter fermented, spices ground fresh.' },
  { number: '03', title: 'Family Dining', desc: 'A warm, comfortable space for guests of every age.' },
  { number: '04', title: 'Warm Hospitality', desc: 'Service that makes every visit feel like coming home.' },
];

export function ComeHungry() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-32 sm:py-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brass-400" />
              <span className="text-[10px] font-medium tracking-ultra text-brass-300">THE MANTRAS PROMISE</span>
              <span className="h-px w-12 bg-brass-400" />
            </div>
          </Reveal>

          <h2 className="mt-8 font-display text-[10vw] font-light leading-[0.95] text-bone-50 sm:text-[7vw] lg:text-[6vw] xl:text-[96px]">
            <SplitText text="Come hungry." />
            <br />
            <span className="italic text-brass-300">
              <SplitText text="Leave happy." delay={0.3} />
            </span>
          </h2>
        </div>

        <div className="mt-24 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative border-t border-bone-50/10 px-2 py-10 sm:px-6"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 + 0.2 }}
                className="absolute left-0 top-0 h-px w-full origin-left bg-brass-400"
              />
              <span className="font-display text-5xl font-light text-brass-300/40 transition-colors group-hover:text-brass-300">
                {f.number}
              </span>
              <h3 className="mt-6 text-[11px] font-medium tracking-ultra text-bone-50">
                {f.title.toUpperCase()}
              </h3>
              <p className="mt-3 max-w-[220px] text-sm font-light leading-relaxed text-bone-100/60">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
