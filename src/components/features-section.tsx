const positions = [
  {
    icon: "🎯",
    title: "Чувствую зал",
    description: "Работаю с людьми, а не по шаблону",
  },
  {
    icon: "🎤",
    title: "Спокойная уверенность",
    description: "Без крика и давления",
  },
  {
    icon: "💼",
    title: "Уровень мероприятия",
    description: "Понимаю формат дорогих событий",
  },
  {
    icon: "⚡",
    title: "Контроль вечера",
    description: "Всё под контролем, но незаметно",
  },
]

const services = [
  { title: "Свадьбы" },
  { title: "Корпоративы" },
  { title: "Частные события" },
]

export function FeaturesSection() {
  return (
    <>
      {/* Позиционирование */}
      <section id="services" className="py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-5">
              Позиционирование
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light italic">
              Без лишнего. Только суть.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C9A96E]/10">
            {positions.map((item, i) => (
              <div
                key={i}
                className="bg-[#0D0D0D] p-10 slide-up hover:bg-[#111] transition-colors duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-2xl mb-5">{item.icon}</div>
                <h3 className="font-display text-2xl text-white font-light mb-3 italic">{item.title}</h3>
                <p className="font-geist text-sm text-white/40 font-light tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-32 px-6 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-5">
              Форматы
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light italic">
              Услуги
            </h2>
          </div>

          <div className="space-y-px">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-8 border-b border-[#C9A96E]/10 group slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="font-display text-3xl md:text-4xl text-white font-light italic group-hover:text-[#C9A96E] transition-colors duration-500">
                  {s.title}
                </span>
                <span className="text-[#C9A96E]/40 text-xl group-hover:text-[#C9A96E] transition-colors duration-500">→</span>
              </div>
            ))}
          </div>

          <p className="font-geist text-xs text-white/25 tracking-[0.3em] uppercase text-center mt-12">
            Каждый формат — индивидуальный
          </p>
        </div>
      </section>
    </>
  )
}
