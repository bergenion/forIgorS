import './Workflow.scss'
import image25 from '../../../assets/images/image_25.jpg'
import image26 from '../../../assets/images/image_26.jpg'
import image27 from '../../../assets/images/image_27.jpg'
import image28 from '../../../assets/images/image_28.jpg'
import image29 from '../../../assets/images/image_29.jpg'
import image30 from '../../../assets/images/image_30.jpg'

const steps = [
  {
    title: 'Первичное интервью и сбор данных',
    time: '10–20 минут после заявки',
    text: 'Уточняем техническое задание, параметры теплоносителей, ограничения по площадям и бюджету.',
    image: image25,
  },
  {
    title: 'Подбор оборудования',
    time: '1–5 дней',
    text: 'Инженеры рассчитывают и подбирают теплообменники, насосные станции и БТП под ваши задачи.',
    image: image26,
  },
  {
    title: 'Согласование договора',
    time: '',
    text: 'Фиксируем состав и сроки поставки, согласуем условия оплаты и гарантий.',
    image: image27,
  },
  {
    title: 'Запуск в производство',
    time: '',
    text: 'Оборудование изготавливается и комплектуется согласно согласованному ТЗ.',
    image: image28,
  },
  {
    title: 'Отгрузка продукции',
    time: '',
    text: 'Организуем доставку до вашего объекта, при необходимости — с монтажом.',
    image: image29,
  },
  {
    title: 'Сервисное обслуживание',
    time: '',
    text: 'Сопровождаем оборудование на протяжении всего срока службы, гарантия до 5 лет.',
    image: image30,
  },
]

export function WorkflowSection() {
  return (
    <section className="vtg-section vtg-section--muted" aria-labelledby="workflow-title">
      <div className="vtg-container">
        <div className="vtg-section__header">
          <h2 id="workflow-title">Схема работы</h2>
        </div>
        <div className="vtg-grid vtg-grid--3 workflow">
          {steps.map((step, index) => (
            <article key={step.title} className="vtg-card vtg-card--soft">
              <div className="vtg-card__image">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="vtg-card__number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              {step.time && <p className="vtg-card__meta">{step.time}</p>}
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

