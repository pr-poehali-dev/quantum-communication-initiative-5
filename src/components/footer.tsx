export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Олег<span className="text-yellow-500"> «Ангара»</span>
            </h2>
            <p className="text-gray-300 mb-4 max-w-md font-geist">
              Провожу свадьбы, юбилеи и корпоративы, которые гости вспоминают годами. Ярко, стильно, без банальщины.
            </p>
            <p className="text-gray-400 text-sm font-geist">📍 Ваш город и выезд</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-geist uppercase tracking-widest text-sm">Разделы</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "Обо мне" },
                { href: "#services", label: "Услуги" },
                { href: "#reviews", label: "Отзывы" },
                { href: "#how", label: "Как я работаю" },
                { href: "#faq", label: "Вопросы" },
                { href: "#contact", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 font-geist"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-500/10">
          <p className="text-gray-500 text-sm font-geist text-center">
            © 2025 Ведущий Олег. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}