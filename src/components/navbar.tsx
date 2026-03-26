import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Олег<span className="text-yellow-500"> «Ангара»</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="font-geist text-white hover:text-yellow-500 transition-colors duration-200">
                Обо мне
              </a>
              <a href="#services" className="font-geist text-white hover:text-yellow-500 transition-colors duration-200">
                Услуги
              </a>
              <a href="#reviews" className="font-geist text-white hover:text-yellow-500 transition-colors duration-200">
                Отзывы
              </a>
              <a href="#faq" className="font-geist text-white hover:text-yellow-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold font-geist border-0"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Узнать дату
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-yellow-500/20">
              <a
                href="#about"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Обо мне
              </a>
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#reviews"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold font-geist border-0">
                  Узнать дату
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}