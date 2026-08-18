import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuDishes, type MenuCategory } from '../data';
import { Reveal } from './Reveal';

export function Menu() {
  const [active, setActive] = useState<MenuCategory>(menuCategories[0]);

  const dishes = useMemo(
    () => menuDishes.filter((d) => d.category === active),
    [active],
  );

  return (
    <section id="menu" className="relative overflow-hidden bg-bone-50 py-32 sm:py-44">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brass-500" />
              <span className="text-[10px] font-medium tracking-ultra text-brass-600">THE MENU</span>
              <span className="h-px w-12 bg-brass-500" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl font-light text-charcoal-900 sm:text-6xl lg:text-7xl">
              À La Carte
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative text-[11px] font-medium tracking-ultra transition-colors ${
                  active === cat ? 'text-charcoal-900' : 'text-charcoal-400 hover:text-charcoal-700'
                }`}
              >
                {cat.toUpperCase()}
                {active === cat && (
                  <motion.span
                    layoutId="menu-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-brass-500"
                    transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {dishes.map((dish, i) => (
                <div key={dish.name}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group flex items-baseline justify-between gap-6 py-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-2xl font-light text-charcoal-900 sm:text-3xl">
                          {dish.name}
                        </h3>
                        {dish.signature && (
                          <span className="text-[9px] font-medium tracking-ultra text-brass-600">
                            SIGNATURE
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-light text-charcoal-500">
                        {dish.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden flex-1 border-b border-dashed border-charcoal-200 sm:block sm:w-16" />
                      <span className="font-display text-xl font-light text-charcoal-900">
                        ₹{dish.price}
                      </span>
                    </div>
                  </motion.div>
                  <div className="editorial-line" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-[11px] font-light tracking-wide text-charcoal-400">
            Prices are indicative demo values for this presentation. Final pricing will be confirmed before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
