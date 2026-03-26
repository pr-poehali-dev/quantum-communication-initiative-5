import { useState, useEffect } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#about", label: "О ведущем" },
    { href: "#services", label: "Услуги" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#faq", label: "Вопросы" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#C9A96E]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-5">
          <a href="#" className="font-display text-white font-light tracking-[0.12em] text-lg">
            Олег <span className="text-[#C9A96E] italic">«Ангара»</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-geist text-xs text-white/40 hover:text-[#C9A96E] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="font-geist text-xs text-[#C9A96E]/70 hover:text-[#C9A96E] border border-[#C9A96E]/25 hover:border-[#C9A96E]/60 px-6 py-3 tracking-[0.2em] uppercase transition-all duration-400"
            >
              Проверить дату
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/50 hover:text-[#C9A96E] transition-colors duration-300 flex flex-col gap-1.5"
          >
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#0B0B0B] border-t border-[#C9A96E]/10 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-geist text-xs text-white/40 hover:text-[#C9A96E] tracking-[0.2em] uppercase px-2 py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block font-geist text-xs text-[#C9A96E] tracking-[0.2em] uppercase px-2 py-3 border border-[#C9A96E]/25 text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Проверить дату
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
