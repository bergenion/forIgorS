import './Delivery.scss'
import image17 from '../../../assets/images/image_17.jpg'
import image18 from '../../../assets/images/image_18.jpg'
import image19 from '../../../assets/images/image_19.jpg'
import image20 from '../../../assets/images/image_20.jpg'
import image21 from '../../../assets/images/image_21.jpg'
import image22 from '../../../assets/images/image_22.jpg'

const deliveryItems = [
  {
    title: 'Бесплатная доставка',
    text: 'По РФ и странам Таможенного Союза ЕАЭС при сумме заказа свыше 10 000 ₽.',
    number: '01',
    image: image17,
  },
  {
    title: 'Точно в срок',
    text: 'Доставляем груз точно в срок, заранее предупреждая о возможных отклонениях.',
    number: '02',
    image: image18,
  },
  {
    title: 'Прозрачная доставка',
    text: 'Предоставляем трек-номер для отслеживания перемещения груза.',
    number: '03',
    image: image19,
  },
  {
    title: 'Безопасность',
    text: 'Все грузы страхуются, вы защищены от убытков при доставке.',
    number: '04',
    image: image20,
  },
  {
    title: 'Бережная транспортировка',
    text: 'Дополнительная обрешётка и подготовка, чтобы оборудование не повредилось.',
    number: '05',
    image: image21,
  },
  {
    title: 'Быстрая доставка',
    text: '2–4 дня по центральной части РФ, 4–8 дней по восточной части и удалённым регионам.',
    number: '06',
    image: image22,
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
              <div className="vtg-card__image">
                <img src={item.image} alt={item.title} />
              </div>
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

