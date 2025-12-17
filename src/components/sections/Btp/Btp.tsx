import './Btp.scss'

export function BtpSection() {
  return (
    <section className="vtg-section vtg-section--muted" id="btp" aria-labelledby="btp-title">
      <div className="vtg-container">
        <div className="vtg-section__header">
          <p className="vtg-eyebrow">Блочный тепловой пункт</p>
          <h2 id="btp-title">Блочные тепловые пункты для любых задач</h2>
          <p>
            Комплексные решения на базе пластинчатых теплообменников, насосного
            оборудования и автоматики — в готовых к подключению блочных тепловых пунктах
            [{`valvetechgroup.com/btp`}](https://valvetechgroup.com/btp).
          </p>
        </div>

        <div className="vtg-grid vtg-grid--3">
          <article className="vtg-card vtg-card--soft">
            <h3>Готовность к монтажу</h3>
            <p>
              БТП поставляются в собранном виде: теплообменники, насосы, обвязка, КИПиА и
              автоматика — всё смонтировано и проверено на заводе.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <h3>Сокращение сроков пуска</h3>
            <p>
              Благодаря заводской сборке вы экономите время на монтаже и наладке, снижая
              риски ошибок на площадке.
            </p>
          </article>
          <article className="vtg-card vtg-card--soft">
            <h3>Проект и согласование</h3>
            <p>
              В комплекте поставляется проектная документация для согласования с
              надзорными органами и сетевыми компаниями.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

