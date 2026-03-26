const testimonials = [
  {
    content: "Спокойно, уверенно и со вкусом",
    name: "Анна и Дмитрий",
    event: "Свадьба",
  },
  {
    content: "Гости были в восторге, но без перегруза",
    name: "Игорь",
    event: "Корпоратив",
  },
  {
    content: "Именно то ощущение, которое хотелось. Никакой суеты — только атмосфера",
    name: "Марина",
    event: "Юбилей",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-32 px-6 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 slide-up">
          <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-5">
            Отзывы
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light italic">
            Что говорят гости
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A96E]/8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0D0D0D] p-10 slide-up hover:bg-[#111] transition-colors duration-500"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="font-display text-xl md:text-2xl text-white font-light italic leading-relaxed mb-8">
                «{t.content}»
              </p>
              <div className="border-t border-[#C9A96E]/10 pt-6">
                <p className="font-geist text-sm text-[#C9A96E]/70 tracking-wide">{t.name}</p>
                <p className="font-geist text-xs text-white/25 tracking-widest uppercase mt-1">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
