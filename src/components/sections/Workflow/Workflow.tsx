import './Workflow.scss'

const steps = [
  {
    title: 'Первичное интервью и сбор данных',
    time: '10–20 минут после заявки',
    text: 'Уточняем техническое задание, параметры теплоносителей, ограничения по площадям и бюджету.',
  },
  {
    title: 'Подбор оборудования',
    time: '1–5 дней',
    text: 'Инженеры рассчитывают и подбирают теплообменники, насосные станции и БТП под ваши задачи.',
  },
  {
    title: 'Согласование договора',
    time: '',
    text: 'Фиксируем состав и сроки поставки, согласуем условия оплаты и гарантий.',
  },
  {
    title: 'Запуск в производство',
    time: '',
    text: 'Оборудование изготавливается и комплектуется согласно согласованному ТЗ.',
  },
  {
    title: 'Отгрузка продукции',
    time: '',
    text: 'Организуем доставку до вашего объекта, при необходимости — с монтажом.',
  },
  {
    title: 'Сервисное обслуживание',
    time: '',
    text: 'Сопровождаем оборудование на протяжении всего срока службы, гарантия до 5 лет.',
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

