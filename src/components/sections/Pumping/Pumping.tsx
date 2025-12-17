import './Pumping.scss'

export function PumpingSection() {
  return (
    <section className="vtg-section" id="pumping" aria-labelledby="pumping-title">
      <div className="vtg-container">
        <div className="vtg-section__header">
          <p className="vtg-eyebrow">Насосные станции</p>
          <h2 id="pumping-title">Насосные станции для систем теплоснабжения и водоснабжения</h2>
          <p>
            Подбор, поставка и комплектация насосных станций под ваши параметры
            производительности и напора [{`valvetechgroup.com/stations`}]
            (https://valvetechgroup.com/stations).
          </p>
        </div>

        <div className="vtg-grid vtg-grid--3">
          <article className="vtg-card vtg-card--soft">
            <h3>Широкий спектр применений</h3>
            <p>
              Станции повышения давления, циркуляционные, подпиточные и другие решения
              под задачи ЖКХ и промышленности.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <h3>Готовые блоки</h3>
            <p>
              Насосы, трубная обвязка, арматура, КИПиА и шкафы управления смонтированы на
              раме и проходят испытания на заводе.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <h3>Экономия энергоресурсов</h3>
            <p>
              Применение частотного регулирования и оптимизация режимов работы снижают
              эксплуатационные затраты.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

