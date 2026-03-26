import { useEffect, useState } from "react"

export const Hero3DWebGL = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      {/* Горизонтальные линии-акценты */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

      {/* Контент */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Надпись-метка */}
        <div
          className={`mb-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-geist font-light">
            Ведущий статусных событий
          </span>
        </div>

        {/* Главный заголовок */}
        <h1
          className={`font-display font-light text-white mb-6 transition-all duration-1200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            transitionDelay: "0.3s",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "0.08em",
            lineHeight: 1.05,
          }}
        >
          ОЛЕГ
          <br />
          <span className="text-[#C9A96E] italic font-light" style={{ fontSize: "0.65em", letterSpacing: "0.15em" }}>
            Ангара
          </span>
        </h1>

        {/* Разделитель */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="h-px w-12 bg-[#C9A96E]/40" />
          <div className="w-1 h-1 rounded-full bg-[#C9A96E]/60" />
          <div className="h-px w-12 bg-[#C9A96E]/40" />
        </div>

        {/* Подзаголовок */}
        <p
          className={`font-geist font-light text-white/60 text-base md:text-lg mb-12 tracking-widest transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.7s" }}
        >
          Атмосфера, которую не нужно объяснять
        </p>

        {/* Геолокация */}
        <p
          className={`font-geist text-xs text-white/30 tracking-[0.3em] uppercase mb-12 transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.9s" }}
        >
          Саратов · выезд
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "1.1s" }}
        >
          <a
            href="#contact"
            className="inline-block border border-[#C9A96E]/50 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0B0B0B] transition-all duration-500 text-xs tracking-[0.3em] uppercase font-geist px-10 py-4 font-medium"
          >
            Проверить дату
          </a>
          <span className="text-white/20 text-xs font-geist tracking-widest">
            Ограниченное количество мероприятий
          </span>
        </div>
      </div>

      {/* Декоративные вертикальные линии */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/15 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/15 to-transparent hidden lg:block" />

      {/* Скролл-индикатор */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-[#C9A96E] animate-pulse" />
      </div>
    </section>
  )
}

export default Hero3DWebGL
