import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card border-t border-yellow-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-6 font-medium">
            Стоимость
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron text-balance leading-tight">
            Стоимость рассчитывается индивидуально
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Напишите мне — подберу формат под ваш бюджет и расскажу о свободных датах.
          </p>
          <p className="text-muted-foreground mb-12 font-geist">
            📞 <a href="tel:+79873035772" className="text-yellow-500 hover:text-yellow-400 transition-colors">+7 987 303-57-72</a> &nbsp;·&nbsp; 📲 WhatsApp / Telegram &nbsp;·&nbsp; 📍 Ваш город
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg px-10 py-6 pulse-button"
              onClick={() => window.open("https://wa.me/79873035772", "_blank")}
            >
              Написать в WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black text-lg px-10 py-6 bg-transparent font-bold"
              onClick={() => window.open("https://t.me/", "_blank")}
            >
              Написать в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}