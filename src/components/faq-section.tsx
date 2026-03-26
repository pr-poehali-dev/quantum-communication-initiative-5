import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как узнать свободную дату?",
      answer: "Напишите мне в WhatsApp — отвечу в течение нескольких часов и сразу скажу о наличии даты.",
    },
    {
      question: "Сколько стоят услуги?",
      answer: "Стоимость формируется под задачу. Я работаю с ограниченным количеством мероприятий, поэтому каждому клиенту уделяю полное внимание.",
    },
    {
      question: "Выезжаете за пределы Саратова?",
      answer: "Да, работаю в других городах. Уточните локацию — обсудим детали.",
    },
    {
      question: "Как проходит подготовка?",
      answer: "После бронирования мы детально обсуждаем событие, формат и атмосферу. Готовлю индивидуальный сценарий и согласовываю его с вами.",
    },
    {
      question: "Работаете с диджеем?",
      answer: "Да, у меня есть проверенные партнёры. Могу работать и с вашим диджеем — всё согласуем заранее.",
    },
  ]

  return (
    <section id="faq" className="py-32 bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20 slide-up">
          <p className="font-geist text-xs text-[#C9A96E] tracking-[0.4em] uppercase mb-5">
            Вопросы
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light italic">
            Часто спрашивают
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#C9A96E]/10 mb-0"
            >
              <AccordionTrigger className="text-left font-geist font-light text-white/80 hover:text-[#C9A96E] py-7 text-base tracking-wide transition-colors duration-300 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-geist text-sm text-white/35 font-light leading-relaxed tracking-wide pb-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
