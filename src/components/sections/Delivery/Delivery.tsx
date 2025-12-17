import './Delivery.scss'

const deliveryItems = [
  {
    title: 'Бесплатная доставка',
    text: 'По РФ и странам Таможенного Союза ЕАЭС при сумме заказа свыше 10 000 ₽.',
    number: '01',
  },
  {
    title: 'Точно в срок',
    text: 'Доставляем груз точно в срок, заранее предупреждая о возможных отклонениях.',
    number: '02',
  },
  {
    title: 'Прозрачная доставка',
    text: 'Предоставляем трек-номер для отслеживания перемещения груза.',
    number: '03',
  },
  {
    title: 'Безопасность',
    text: 'Все грузы страхуются, вы защищены от убытков при доставке.',
    number: '04',
  },
  {
    title: 'Бережная транспортировка',
    text: 'Дополнительная обрешётка и подготовка, чтобы оборудование не повредилось.',
    number: '05',
  },
  {
    title: 'Быстрая доставка',
    text: '2–4 дня по центральной части РФ, 4–8 дней по восточной части и удалённым регионам.',
    number: '06',
  },
]

export function DeliverySection() {
  return (
    <section className="vtg-section" id="delivery" aria-labelledby="delivery-title">
      <div className="vtg-container">
        <div className="vtg-section__header">
          <h2 id="delivery-title">Доставка</h2>
          <p>Организуем безопасную и предсказуемую доставку по всей России и СНГ.</p>
        </div>
        <div className="vtg-grid vtg-grid--3">
          {deliveryItems.map((item) => (
            <article key={item.title} className="vtg-card vtg-card--bordered">
              <div className="vtg-card__number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

