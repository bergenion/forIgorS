import './Catalog.scss'
import image1 from '../../../assets/images/image_1.jpg'
import image2 from '../../../assets/images/image_2.jpg'
import image3 from '../../../assets/images/image_3.jpg'

export function CatalogSection() {
  return (
    <section
      className="vtg-section vtg-section--muted"
      id="catalog"
      aria-labelledby="catalog-title"
    >
      <div className="vtg-container">
        <div className="vtg-section__header">
          <p className="vtg-eyebrow">Каталог</p>
          <h2 id="catalog-title">Каталог оборудования</h2>
          <p>
            Подбор теплообменников, насосных станций и блочных тепловых пунктов в одном
            каталоге [{`katalog-valvetechgroup.creatium.site`}]
            (https://katalog-valvetechgroup.creatium.site/).
          </p>
        </div>

        <div className="vtg-grid vtg-grid--3">
          <article className="vtg-card vtg-card--soft">
            <div className="vtg-card__image">
              <img src={image1} alt="Паянные теплообменники" />
            </div>
            <h3>Паянные теплообменники</h3>
            <p>
              Компактные решения для небольших тепловых нагрузок и ограниченных
              пространств, в том числе для агрессивных сред.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <div className="vtg-card__image">
              <img src={image2} alt="Пластинчатые теплообменники" />
            </div>
            <h3>Пластинчатые теплообменники</h3>
            <p>
              Разборные и полуразборные аппараты с возможностью наращивания мощности
              заменой или добавлением пластин.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <div className="vtg-card__image">
              <img src={image3} alt="Насосные станции и БТП" />
            </div>
            <h3>Насосные станции и БТП</h3>
            <p>
              Готовые блочные решения для теплоснабжения объектов, подобранные под ваши
              нагрузки и схемы подключения.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

