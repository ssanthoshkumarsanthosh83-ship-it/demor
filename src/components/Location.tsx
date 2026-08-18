import { motion } from 'framer-motion';
import { Phone, Navigation, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Location() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bone-50 py-32 sm:py-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-brass-500" />
                <span className="text-[10px] font-medium tracking-ultra text-brass-600">VISIT US</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl font-light text-charcoal-900 sm:text-6xl">
                Mantras <span className="italic text-brass-600">Pure Veg</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-[10px] font-medium tracking-ultra text-charcoal-400">ADDRESS</p>
                  <p className="mt-2 text-base font-light leading-relaxed text-charcoal-800">
                    65, Ormes Road<br />
                    Kilpauk, Chennai<br />
                    Tamil Nadu – 600010
                  </p>
                </div>
                <div className="editorial-line max-w-xs" />
                <div>
                  <p className="text-[10px] font-medium tracking-ultra text-charcoal-400">PHONE</p>
                  <a href="tel:08489944449" className="mt-2 block font-display text-3xl font-light text-charcoal-900 transition-colors hover:text-brass-600">
                    084899 44449
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:08489944449"
                  className="group inline-flex items-center justify-center gap-2 border border-charcoal-900 px-8 py-4 text-[11px] font-medium tracking-ultra text-charcoal-900 transition-all hover:bg-charcoal-900 hover:text-bone-50"
                >
                  CALL RESTAURANT
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Ormes+Road+Kilpauk+Chennai+600010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 border border-charcoal-200 px-8 py-4 text-[11px] font-medium tracking-ultra text-charcoal-700 transition-all hover:border-brass-500 hover:text-brass-600"
                >
                  GET DIRECTIONS
                  <Navigation className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 border-t border-charcoal-200/40 pt-6">
                <p className="text-[10px] font-medium tracking-ultra text-charcoal-400">OPEN DAILY</p>
                <p className="mt-2 text-sm font-light text-charcoal-600">
                  Mon–Fri: 7:00 AM – 10:30 PM<br />
                  Sat–Sun: 6:30 AM – 11:00 PM
                </p>
                <p className="mt-2 text-[11px] font-light text-charcoal-400">
                  Timings indicative — please confirm before launch.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-full min-h-[400px] overflow-hidden border border-charcoal-200/30 lg:min-h-[600px]"
            >
              <iframe
                title="Mantras Pure Veg Kilpauk location"
                src="https://www.google.com/maps?q=Ormes+Road+Kilpauk+Chennai+600010&output=embed"
                className="h-full w-full grayscale-[40%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Ormes+Road+Kilpauk+Chennai+600010"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-bone-50 px-5 py-3 text-[10px] font-medium tracking-ultra text-charcoal-900 shadow-lg"
              >
                OPEN IN GOOGLE MAPS <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
