import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Анна и Дмитрий",
    role: "Свадьба",
    initials: "АД",
    content:
      "Это был лучший ведущий! Все гости в восторге! Олег создал такую атмосферу, что мы забыли обо всех переживаниях и просто наслаждались праздником.",
  },
  {
    name: "Игорь",
    role: "Корпоратив",
    initials: "И",
    content:
      "Без колхоза, всё стильно и современно. Команда до сих пор вспоминает этот вечер. Точно обратимся снова!",
  },
  {
    name: "Марина",
    role: "Юбилей мамы",
    initials: "М",
    content:
      "Олег сделал юбилей мамы незабываемым. Гости разных возрастов — и все были вовлечены! Очень тактично, тепло и профессионально.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
            Отзывы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 font-orbitron">
            Что говорят гости
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории от реальных людей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-yellow-500/20 bg-background slide-up hover:border-yellow-500/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="text-yellow-500 text-3xl mb-4 font-serif">"</div>
                <p className="text-card-foreground mb-8 leading-relaxed text-base">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4 border-t border-yellow-500/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-sm font-bold font-geist">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-500 font-geist">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-geist">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
