import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как узнать свободную дату?",
      answer:
        "Напишите мне в WhatsApp или Telegram — я отвечу в течение нескольких часов и скажу, свободен ли на вашу дату. Бронирование происходит после внесения предоплаты.",
    },
    {
      question: "Сколько стоят ваши услуги?",
      answer:
        "Стоимость рассчитывается индивидуально — зависит от типа мероприятия, длительности и локации. Напишите мне, и я подберу формат под ваш бюджет.",
    },
    {
      question: "Вы работаете с диджеем?",
      answer:
        "Да, у меня есть проверенные партнёры-диджеи, с которыми мы работаем в связке. Могу также работать с вашим диджеем — заранее согласуем все детали.",
    },
    {
      question: "Что если мероприятие за городом?",
      answer:
        "Я выезжаю за пределы города. Уточните локацию при обращении — обсудим детали и стоимость выезда.",
    },
    {
      question: "Как проходит подготовка к мероприятию?",
      answer:
        "После бронирования мы созваниваемся и обсуждаем все детали: ваши пожелания, гостей, тайминг. Я готовлю индивидуальный сценарий и согласовываю его с вами заранее.",
    },
    {
      question: "Вы проводите мероприятия в будние дни?",
      answer:
        "Да, я работаю в любой день — будни, выходные, праздники. Уточните дату, и я скажу о своей доступности.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-yellow-500 text-sm uppercase tracking-[0.3em] font-geist mb-4 font-medium">
            Вопросы и ответы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-geist">
            Отвечаю на вопросы, которые чаще всего задают перед бронированием
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-yellow-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-yellow-400 font-geist px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-4 font-geist">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
