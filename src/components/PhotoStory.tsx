import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { photoStory } from '../data';
import { Reveal } from './Reveal';

function PhotoCard({ item, index }: { item: typeof photoStory[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -40 : 40, index % 2 === 0 ? 40 : -40]);

  const isOffset = index === 1;

  return (
    <div
      ref={ref}
      className={`relative ${isOffset ? 'lg:mt-32' : ''}`}
    >
      <motion.div style={{ y }} className="relative overflow-hidden">
        <div className={`overflow-hidden ${index === 0 ? 'aspect-[4/5]' : index === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
          />
        </div>
      </motion.div>

      <div className="mt-6 flex items-start gap-4">
        <span className="font-display text-3xl font-light text-brass-600">{item.label}</span>
        <div>
          <h3 className="font-display text-2xl font-light text-charcoal-900">{item.title}</h3>
          <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-charcoal-500">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PhotoStory() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-bone-100 py-32 sm:py-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brass-500" />
              <span className="text-[10px] font-medium tracking-ultra text-brass-600">A VISUAL JOURNEY</span>
              <span className="h-px w-12 bg-brass-500" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl font-light text-charcoal-900 sm:text-6xl">
              Photo Story
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {photoStory.map((item, i) => (
            <PhotoCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
