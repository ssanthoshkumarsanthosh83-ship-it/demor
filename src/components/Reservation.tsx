import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal, SplitText } from './Reveal';

interface FormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

const empty: FormState = { name: '', phone: '', date: '', time: '', guests: '2' };

export function Reservation() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = 'Valid phone required';
    if (!form.date) next.date = 'Required';
    if (!form.time) next.time = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setDone(true);
  };

  const fieldClass = (key: keyof FormState) =>
    `w-full border-b bg-transparent py-3 text-sm font-light text-bone-50 placeholder-charcoal-300 outline-none transition-colors focus:border-brass-400 ${
      errors[key] ? 'border-red-400' : 'border-bone-50/20'
    }`;

  return (
    <section id="reservation" className="relative overflow-hidden bg-charcoal-900 py-32 sm:py-44">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-brass-400" />
                <span className="text-[10px] font-medium tracking-ultra text-brass-300">RESERVATION</span>
              </div>
            </Reveal>

            <h2 className="mt-8 font-display text-5xl font-light leading-[1.05] text-bone-50 sm:text-6xl lg:text-7xl">
              <SplitText text="Your table" />
              <br />
              <span className="italic text-brass-300">
                <SplitText text="awaits." delay={0.3} />
              </span>
            </h2>

            <Reveal delay={0.5}>
              <p className="mt-10 max-w-sm text-base font-light leading-loose text-bone-100/60">
                Make your next meal at Mantras a memorable one. Reserve your table and we will have everything ready.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="min-h-[360px]">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start gap-6 py-10"
                  >
                    <span className="flex h-14 w-14 items-center justify-center border border-brass-400 text-brass-300">
                      <Check className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-3xl font-light text-bone-50">Thank you.</h3>
                    <p className="max-w-md text-sm font-light leading-relaxed text-bone-100/70">
                      Your reservation request has been received. Our team will call you on {form.phone} to confirm your table for {form.guests} on {form.date} at {form.time}.
                    </p>
                    <button
                      onClick={() => { setForm(empty); setDone(false); }}
                      className="text-[11px] font-medium tracking-ultra text-brass-300 border-b border-brass-400 pb-0.5 hover:text-brass-200"
                    >
                      MAKE ANOTHER RESERVATION
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="space-y-8"
                  >
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] font-medium tracking-ultra text-bone-200/50">NAME</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          placeholder="Your name"
                          className={fieldClass('name')}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-medium tracking-ultra text-bone-200/50">PHONE</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="084899 44449"
                          className={fieldClass('phone')}
                        />
                        {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-medium tracking-ultra text-bone-200/50">DATE</label>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={form.date}
                          onChange={(e) => update('date', e.target.value)}
                          className={`${fieldClass('date')} [color-scheme:dark]`}
                        />
                        {errors.date && <p className="mt-1.5 text-xs text-red-400">{errors.date}</p>}
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-medium tracking-ultra text-bone-200/50">TIME</label>
                        <input
                          type="time"
                          value={form.time}
                          onChange={(e) => update('time', e.target.value)}
                          className={`${fieldClass('time')} [color-scheme:dark]`}
                        />
                        {errors.time && <p className="mt-1.5 text-xs text-red-400">{errors.time}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-medium tracking-ultra text-bone-200/50">GUESTS</label>
                      <select
                        value={form.guests}
                        onChange={(e) => update('guests', e.target.value)}
                        className={`${fieldClass('guests')} [color-scheme:dark]`}
                      >
                        {['1', '2', '3', '4', '5', '6', '7', '8', '8+'].map((n) => (
                          <option key={n} value={n} className="text-charcoal-900">
                            {n} {n === '1' ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 border border-brass-400 bg-brass-400 px-10 py-4 text-[11px] font-medium tracking-ultra text-charcoal-900 transition-all hover:bg-brass-300"
                    >
                      RESERVE TABLE
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="mt-3 text-[11px] font-light text-bone-200/40">
                      Demo form — no real booking is made. Connects to the restaurant on launch.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
