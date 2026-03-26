export function AboutSection() {
  const highlights = [
    "Без пошлых шуток и заезженных конкурсов",
    "Индивидуальный сценарий под каждое событие",
    "Лёгкая атмосфера и вовлечение всех гостей",
  ]

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="slide-up">
            <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
              О ведущем
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron leading-tight">
              Привет!<br />Меня зовут Олег.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Я профессиональный ведущий с большим опытом проведения торжеств. Мои мероприятия — это не «тамада с конкурсами», а стильные, современные и живые события.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Я работаю так, чтобы вы отдыхали, а не переживали.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <span className="text-foreground font-geist">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[3/4] bg-card border border-yellow-500/20 overflow-hidden relative">
              <img
                src="/placeholder.jpg"
                alt="Ведущий Олег"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 border border-yellow-500/30 p-4">
                  <p className="text-yellow-500 text-xs uppercase tracking-widest font-geist mb-1">Профессиональный ведущий</p>
                  <p className="text-white font-bold text-lg font-orbitron">Олег</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-yellow-500/30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-yellow-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
