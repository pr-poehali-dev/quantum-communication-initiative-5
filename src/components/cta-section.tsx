export function CTASection() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0D0D0D] border-t border-[#C9A96E]/10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="slide-up">
          <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-8">
            Стоимость
          </p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light italic mb-8 leading-tight">
            Давайте обсудим<br />ваше событие
          </h2>

          <p className="font-geist text-sm text-white/35 font-light leading-relaxed tracking-wide mb-4 max-w-xl mx-auto">
            Я работаю с ограниченным количеством мероприятий
          </p>
          <p className="font-geist text-sm text-white/25 font-light leading-relaxed tracking-wide mb-16 max-w-xl mx-auto">
            Стоимость формируется под задачу — напишите, предложу решение
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/79873035772"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#C9A96E] text-[#0B0B0B] hover:bg-[#d4b87d] transition-colors duration-500 text-xs tracking-[0.3em] uppercase font-geist px-12 py-5 font-medium"
            >
              WhatsApp
            </a>
            <a
              href="tel:+79873035772"
              className="inline-block border border-[#C9A96E]/30 text-[#C9A96E]/70 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-500 text-xs tracking-[0.3em] uppercase font-geist px-12 py-5 font-medium"
            >
              Позвонить
            </a>
          </div>

          <p className="font-geist text-xs text-white/20 tracking-widest">
            +7 987 303-57-72 · Саратов
          </p>
        </div>
      </div>
    </section>
  )
}
