import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    emoji: "💍",
    title: "Свадьбы",
    description:
      "Проведу вашу свадьбу так, чтобы было душевно, весело и без кринжа. Создам атмосферу, которую гости запомнят навсегда.",
  },
  {
    emoji: "🎂",
    title: "Юбилеи",
    description:
      "Сделаю праздник тёплым и запоминающимся для всей семьи. Каждый гость почувствует себя частью особенного события.",
  },
  {
    emoji: "🎯",
    title: "Корпоративы",
    description:
      "Лёгкий юмор, интерактив и стиль — без перегруза. Объединю команду и создам позитивную атмосферу для всего коллектива.",
  },
]

const whyChoose = [
  { emoji: "🔥", text: "Живой юмор, а не заготовки" },
  { emoji: "🎯", text: "Чувствую публику и держу темп" },
  { emoji: "🎤", text: "Профессиональный звук и работа с диджеем" },
  { emoji: "💡", text: "Помогаю с программой и таймингом" },
  { emoji: "💬", text: "Всегда на связи от заявки до финала" },
]

export function FeaturesSection() {
  return (
    <>
      <section id="services" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
              Услуги
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-orbitron">
              Какие мероприятия провожу
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Каждое событие — уникальное. Никаких шаблонов и банальщины
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glow-border hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 slide-up border-yellow-500/20 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <CardTitle className="text-2xl font-bold text-card-foreground font-orbitron">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="border-t border-yellow-500/10 pt-20">
            <div className="text-center mb-12">
              <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
                Почему выбирают меня
              </div>
              <h2 className="text-4xl font-bold text-foreground font-orbitron">
                Моё отличие от других
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 border border-yellow-500/15 bg-card slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-foreground font-geist">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
