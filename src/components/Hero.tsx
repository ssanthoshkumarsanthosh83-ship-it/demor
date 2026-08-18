import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&w=2000';

const heroStats = [
  { value: '4.7', label: 'Google Rating', star: true },
  { value: '6,000+', label: 'Reviews' },
  { value: '100%', label: 'Vegetarian' },
];

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal-900">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={HERO_IMG} alt="Ghee roast masala dosa with chutneys" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/40 to-charcoal-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 to-transparent" />
      </motion.div>

      <div className="relative flex h-full flex-col justify-end pb-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-brass-400" />
            <span className="text-[11px] font-medium tracking-ultra text-brass-300">KILPAUK · CHENNAI</span>
          </motion.div>

          <h1 className="font-display text-[14vw] font-light leading-[0.9] text-bone-50 sm:text-[10vw] lg:text-[8.5vw] xl:text-[140px]">
            <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="block">
              THE ART OF
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }} className="block italic text-brass-300">
              Vegetarian
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="block">
              Dining.
            </motion.span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-md text-base font-light leading-relaxed text-bone-100/80"
            >
              Where timeless South Indian flavours meet a contemporary dining experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-3 bg-bone-50 px-8 py-4 text-[11px] font-medium tracking-ultra text-charcoal-900 transition-all hover:bg-brass-300 hover:text-charcoal-900"
              >
                DISCOVER OUR MENU
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#reservation"
                className="group inline-flex items-center justify-center gap-3 border border-bone-50/30 px-8 py-4 text-[11px] font-medium tracking-ultra text-bone-50 transition-all hover:border-bone-50"
              >
                RESERVE A TABLE
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-14 flex flex-wrap items-center gap-8 border-t border-bone-50/15 pt-8 sm:gap-12"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                {stat.star && <Star className="h-4 w-4 fill-brass-400 text-brass-400" />}
                <span className="font-display text-3xl font-light text-bone-50">{stat.value}</span>
                <span className="text-[10px] font-light tracking-ultra text-bone-200/60">{stat.label.toUpperCase()}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-10 hidden items-center gap-2 text-bone-200/50 lg:flex"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] font-light tracking-ultra"
        >
          SCROLL TO EXPLORE
        </motion.span>
        <span className="text-base">↓</span>
      </motion.div>
    </section>
  );
}
