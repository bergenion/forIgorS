import './HeatExchangers.scss'
import image4 from '../../../assets/images/image_4.jpg'
import image5 from '../../../assets/images/image_5.jpg'
import image6 from '../../../assets/images/image_6.jpg'
import image23 from '../../../assets/images/image_23.jpg'
import image24 from '../../../assets/images/image_24.jpg'

export function HeatExchangersSection() {
  return (
    <section
      className="vtg-section heat-exchangers"
      id="heat-exchangers"
      aria-labelledby="heat-exchangers-title"
    >
      <div className="vtg-container">
        <div className="vtg-section__header">
          <p className="vtg-eyebrow">Теплообменники</p>
          <h2 id="heat-exchangers-title">Теплообменники ведущих брендов</h2>
          <p>
            Пластинчатые теплообменники всех крупных брендов (Alfa Laval, Ridan, Nord,
            Sondex, Funke, Danfoss) со скидкой до 45%. Подберём оптимальную модель под
            ваши параметры и режим работы [{`valvetechgroup.com/heatexchanger`}]
            (https://valvetechgroup.com/heatexchanger).
          </p>
        </div>

        <div className="vtg-grid vtg-grid--3">
          <article className="vtg-card vtg-card--soft">
            <div className="vtg-card__image">
              <img src={image4} alt="Широкий типоразмерный ряд" />
            </div>
            <h3>Широкий типоразмерный ряд</h3>
            <p>
              Подбор аппаратов по мощности, давлению, рабочей температуре и типу
              теплоносителя. Возможность работы с агрессивными средами и подбор сплавов
              под вашу задачу.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <div className="vtg-card__image">
              <img src={image5} alt="Индивидуальный расчёт" />
            </div>
            <h3>Индивидуальный расчёт</h3>
            <p>
              Инженеры выполняют теплотехнический расчёт с учётом нагрузок, допустимых
              потерь напора, загрязнения сред и требований нормативных документов.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <div className="vtg-card__image">
              <img src={image6} alt="Быстрое изготовление" />
            </div>
            <h3>Быстрое изготовление</h3>
            <p>
              Средний срок изготовления — 3–5 дней. Возможна комплектация ответными
              фланцами, доработка аппарата под индивидуальные требования.
            </p>
          </article>
        </div>

        <div className="vtg-grid vtg-grid--2 heat-exchangers__cta">
          <article className="vtg-card vtg-card--bordered">
            <div className="vtg-card__image">
              <img src={image23} alt="Подбор теплообменника профессионалами" />
            </div>
            <h3>Подбор теплообменника профессионалами</h3>
            <p>
              Вы можете заполнить опросный лист онлайн или направить свой файл. Наш
              специалист перезвонит, проконсультирует и предложит несколько вариантов
              решения.
            </p>
            <div className="vtg-hero__actions">
              <button className="vtg-button vtg-button--primary">
                Заполнить опросный лист онлайн
              </button>
              <button className="vtg-button vtg-button--ghost">Скачать шаблон листа</button>
            </div>
          </article>

          <article className="vtg-card vtg-card--bordered">
            <div className="vtg-card__image">
              <img src={image24} alt="Высокое качество от ведущих брендов" />
            </div>
            <h3>Высокое качество от ведущих брендов</h3>
            <p>
              Европейский стандарт организации производства, контроль качества на всех
              этапах, соответствие требованиям российских и международных нормативов.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

