import './Hero.scss'

export function HeroSection() {
  return (
    <section className="vtg-section vtg-hero">
      <div className="vtg-container vtg-hero__grid">
        <div className="vtg-hero__content">
          <p className="vtg-eyebrow">Блочный тепловой пункт</p>
          <h1 className="vtg-hero__title">
            ТЕПЛООБМЕННИКИ, НАСОСЫ,
            <br />
            БЛОЧНЫЕ ТЕПЛОВЫЕ ПУНКТЫ
          </h1>
          <p className="vtg-hero__subtitle">
            Сэкономьте время и деньги на монтаже, получите заводское качество с готовым
            для согласования проектом. Гарантия на всё оборудование.
          </p>
          <div className="vtg-hero__actions">
            <button className="vtg-button vtg-button--primary">Подобрать БТП</button>
            <button className="vtg-button vtg-button--ghost">Получить консультацию</button>
          </div>
          <p className="vtg-hero__note">
            Переподберем теплообменники, насосные станции, БТП любых брендов. Просто
            оставьте заявку — инженер ознакомится с вашим ТЗ и подготовит варианты.
          </p>
        </div>
        <div className="vtg-hero__side-card">
          <div className="vtg-card vtg-card--accent">
            <h2>Оставьте ваши данные</h2>
            <p>Мы вам перезвоним и поможем подобрать оборудование под вашу задачу.</p>
            <form
              className="vtg-form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <label className="vtg-form__field">
                <span>Ваш телефон*</span>
                <input type="tel" required placeholder="+7 (___) ___-__-__" />
              </label>
              <label className="vtg-form__field">
                <span>Ваш email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label className="vtg-form__checkbox">
                <input type="checkbox" defaultChecked />
                <span>Я согласен на обработку персональных данных</span>
              </label>
              <button className="vtg-button vtg-button--primary vtg-form__submit">
                Получить консультацию
              </button>
              <p className="vtg-form__hint">
                Отправляя заявку, вы даёте согласие на обработку персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

