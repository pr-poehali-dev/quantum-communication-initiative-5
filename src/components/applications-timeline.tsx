export function ApplicationsTimeline() {
  const steps = [
    {
      number: "01",
      title: "Созваниваемся",
      description:
        "Обсуждаем ваше мероприятие: дата, формат, пожелания. Никаких шаблонных вопросов — только то, что важно именно вам.",
      details: ["Бесплатная консультация", "Удобный для вас формат связи", "Ответы на все вопросы"],
    },
    {
      number: "02",
      title: "Обсуждаем формат",
      description:
        "Вместе определяем стиль праздника, тайминг и программу. Учитываю ваши пожелания, возраст гостей и атмосферу события.",
      details: ["Индивидуальный подход", "Гибкая программа", "Учёт всех пожеланий"],
    },
    {
      number: "03",
      title: "Делаю сценарий",
      description:
        "Готовлю уникальный сценарий специально для вашего мероприятия. Координирую работу с диджеем и другими подрядчиками.",
      details: ["Уникальный сценарий", "Работа с диджеем", "Полная координация"],
    },
    {
      number: "04",
      title: "Провожу мероприятие 🔥",
      description:
        "В день праздника беру на себя всё. Вы просто отдыхаете и наслаждаетесь — всё остальное на мне.",
      details: ["Профессиональный звук", "Живой контакт с гостями", "Вы отдыхаете"],
    },
  ]

  return (
    <>
      {/* Video / Photo section */}
      <section id="video" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
              Портфолио
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-orbitron mb-4">
              Посмотрите, как проходят мои мероприятия
            </h2>
            <p className="text-muted-foreground text-lg">Живые эмоции говорят лучше любых слов 👇</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-background border border-yellow-500/20 flex flex-col items-center justify-center gap-4 group hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-500/50 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-300">
                <span className="text-yellow-500 text-2xl">▶</span>
              </div>
              <p className="text-muted-foreground text-sm font-geist">Видео со свадьбы</p>
            </div>
            <div className="aspect-video bg-background border border-yellow-500/20 flex flex-col items-center justify-center gap-4 group hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-500/50 flex items-center justify-center group-hover:border-yellow-500 transition-all duration-300">
                <span className="text-yellow-500 text-2xl">▶</span>
              </div>
              <p className="text-muted-foreground text-sm font-geist">Видео с корпоратива</p>
            </div>
          </div>
        </div>
      </section>

      {/* How I work timeline */}
      <section id="how" className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
              Процесс
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-orbitron">
              Как я работаю
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-yellow-500/20 md:-translate-x-px" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 slide-up ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-yellow-500 rounded-full -translate-x-1.5 md:-translate-x-2 top-6 z-10" />

                  <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="text-yellow-500/40 text-6xl font-bold font-orbitron leading-none mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-orbitron mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <div className={`space-y-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                      {step.details.map((detail, i) => (
                        <div key={i} className={`flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                          <span className="text-yellow-500/70 text-sm font-geist">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
