import './Benefits.scss'

const benefits = [
  {
    title: 'ТОЧНОСТЬ',
    text: 'Подобранное оборудование точно подойдёт для решения ваших задач.',
  },
  {
    title: 'СКОРОСТЬ',
    text: 'Сделаем расчёт и доставим до вас в согласованные сроки.',
  },
  {
    title: 'ГАРАНТИИ',
    text: 'Гарантия на подобранное оборудование и комплектующие до 5 лет.',
  },
  {
    title: 'АЛЬТЕРНАТИВА ПОД БЮДЖЕТ',
    text: 'Подберём несколько вариантов, чтобы вы могли выбрать оптимальное решение.',
  },
]

export function BenefitsSection() {
  return (
    <section className="vtg-section vtg-section--muted" aria-labelledby="benefits-title">
      <div className="vtg-container">
        <div className="vtg-section__header">
          <h2 id="benefits-title">Преимущества работы с ValveTech Group</h2>
          <p>
            Мы помогаем производственным и строительным организациям получать надёжное
            оборудование под конкретные задачи.
          </p>
        </div>
        <div className="vtg-grid vtg-grid--4">
          {benefits.map((item) => (
            <article key={item.title} className="vtg-card vtg-card--soft">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

