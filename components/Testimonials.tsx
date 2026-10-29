import { testimonials } from '@/lib/testimonials';

export default function Testimonials() {
  return (
    <section className="container-x mt-20" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="text-4xl font-bold">What our customers say</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="border-l-4 border-amber pl-5">
            <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-steel">
              <span className="font-semibold text-charcoal">{t.name}</span>, {t.role}, {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
