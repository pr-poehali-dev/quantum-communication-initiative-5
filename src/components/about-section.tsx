export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="slide-up">
          <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-12">
            Смысл
          </p>

          <p className="font-display text-3xl md:text-4xl lg:text-5xl text-white/40 font-light leading-relaxed mb-6 italic">
            Хороший ведущий развлекает
          </p>

          <div className="divider-gold mb-6" />

          <p className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed mb-16 italic">
            Сильный — управляет атмосферой
          </p>

          <p className="font-geist text-base md:text-lg text-white/50 font-light leading-relaxed tracking-wide max-w-xl mx-auto">
            Я работаю так, чтобы<br />
            гости чувствовали уровень,<br />
            а вы —{" "}
            <span className="text-[#C9A96E]">спокойствие</span>
          </p>
        </div>

        <div className="mt-24 border border-[#C9A96E]/15 p-10 slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="font-display text-xl md:text-2xl text-white/60 font-light italic leading-relaxed mb-4">
            Я не веду мероприятия «для галочки»
          </p>
          <p className="font-geist text-sm text-white/35 font-light leading-relaxed tracking-wide">
            Я работаю с теми, кто понимает разницу<br />
            между «весело» и «на уровне»
          </p>
        </div>
      </div>
    </section>
  )
}
