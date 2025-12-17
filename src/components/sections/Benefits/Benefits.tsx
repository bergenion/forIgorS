import './Benefits.scss'
import image13 from '../../../assets/images/image_13.jpg'
import image14 from '../../../assets/images/image_14.jpg'
import image15 from '../../../assets/images/image_15.jpg'
import image16 from '../../../assets/images/image_16.jpg'

const benefits = [
  {
    title: 'ТОЧНОСТЬ',
    text: 'Подобранное оборудование точно подойдёт для решения ваших задач.',
    image: image13,
  },
  {
    title: 'СКОРОСТЬ',
    text: 'Сделаем расчёт и доставим до вас в согласованные сроки.',
    image: image14,
  },
  {
    title: 'ГАРАНТИИ',
    text: 'Гарантия на подобранное оборудование и комплектующие до 5 лет.',
    image: image15,
  },
  {
    title: 'АЛЬТЕРНАТИВА ПОД БЮДЖЕТ',
    text: 'Подберём несколько вариантов, чтобы вы могли выбрать оптимальное решение.',
    image: image16,
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
              <div className="vtg-card__image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

