export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#C9A96E]/10 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <p className="font-display text-2xl text-white font-light mb-2">
              Олег <span className="text-[#C9A96E] italic">«Ангара»</span>
            </p>
            <p className="font-geist text-xs text-white/25 tracking-widest uppercase">
              Ведущий статусных событий · Саратов
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { href: "#about", label: "О ведущем" },
              { href: "#services", label: "Услуги" },
              { href: "#video", label: "Портфолио" },
              { href: "#reviews", label: "Отзывы" },
              { href: "#contact", label: "Контакты" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-geist text-xs text-white/25 hover:text-[#C9A96E] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/79873035772"
              target="_blank"
              rel="noreferrer"
              className="font-geist text-xs text-white/25 hover:text-[#C9A96E] tracking-widest uppercase transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a
              href="tel:+79873035772"
              className="font-geist text-xs text-white/25 hover:text-[#C9A96E] tracking-widest uppercase transition-colors duration-300"
            >
              +7 987 303-57-72
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#C9A96E]/8 flex justify-center">
          <p className="font-geist text-xs text-white/15 tracking-widest">
            © 2025 Олег «Ангара». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
