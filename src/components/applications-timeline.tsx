const steps = [
  { number: "01", title: "Диалог", description: "Созваниваемся и обсуждаем ваше событие без лишних формальностей" },
  { number: "02", title: "Идея", description: "Формируем концепцию и атмосферу, которую хотите создать" },
  { number: "03", title: "Подготовка", description: "Индивидуальный сценарий, координация с командой, все детали под контролем" },
  { number: "04", title: "Событие", description: "Вы наслаждаетесь вечером. Всё остальное — на мне" },
]

export function ApplicationsTimeline() {
  return (
    <>
      {/* Видео-блок */}
      <section id="video" className="py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-5">
              Портфолио
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light italic">
              Атмосфера в движении
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video border border-[#C9A96E]/15 flex flex-col items-center justify-center gap-4 group hover:border-[#C9A96E]/40 transition-all duration-700 bg-[#0B0B0B] slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-12 h-12 border border-[#C9A96E]/30 flex items-center justify-center group-hover:border-[#C9A96E]/70 transition-all duration-500">
                  <span className="text-[#C9A96E]/60 text-base group-hover:text-[#C9A96E] transition-colors duration-500">▶</span>
                </div>
                <p className="font-geist text-xs text-white/20 tracking-[0.2em] uppercase">
                  {i === 1 ? "Свадьба" : "Частное событие"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это происходит */}
      <section id="how" className="py-32 px-6 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-5">
              Процесс
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light italic">
              Как это происходит
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#C9A96E]/30 via-[#C9A96E]/10 to-transparent hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-8 items-start slide-up"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 border border-[#C9A96E]/20 items-center justify-center hidden md:flex">
                    <span className="font-geist text-xs text-[#C9A96E]/50 tracking-widest">{step.number}</span>
                  </div>
                  <div className="flex-1 pb-12 border-b border-[#C9A96E]/8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-geist text-xs text-[#C9A96E]/40 tracking-widest md:hidden">{step.number}</span>
                      <h3 className="font-display text-2xl md:text-3xl text-white font-light italic">{step.title}</h3>
                    </div>
                    <p className="font-geist text-sm text-white/35 font-light leading-relaxed tracking-wide">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
