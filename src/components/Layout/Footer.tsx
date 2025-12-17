import './Footer.scss'

export function Footer() {
  return (
    <footer className="vtg-footer" id="contacts">
      <div className="vtg-container vtg-footer__inner">
        <div className="vtg-footer__brand">
          <div className="vtg-footer__logo">ValveTech Group</div>
          <p>
            Поставляем теплообменное оборудование, насосные станции и блочные тепловые
            пункты для производственных и строительных организаций в РФ и СНГ.
          </p>
        </div>
        <div className="vtg-footer__columns">
          <div className="vtg-footer__column">
            <h3>Контакты</h3>
            <p>Пермь, Чернышевского 28, оф. 100</p>
            <a href="tel:+79585784840">+7 (958) 578-48-40</a>
            <a href="mailto:info@valvetechgroup.com">info@valvetechgroup.com</a>
            <p>09:00–18:00 по Перми (07:00–16:00 по Мск)</p>
          </div>
          <div className="vtg-footer__column">
            <h3>Разделы</h3>
            <a href="#heat-exchangers">Теплообменники</a>
            <a href="#pumping">Насосные станции</a>
            <a href="#btp">БТП</a>
            <a href="#delivery">Доставка</a>
          </div>
          <div className="vtg-footer__column">
            <h3>Задать вопрос</h3>
            <p>Оставьте свои данные, и мы перезвоним вам.</p>
            <button className="vtg-button vtg-button--outline vtg-footer__cta">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
      <div className="vtg-footer__bottom">
        <div className="vtg-container vtg-footer__bottom-inner">
          <p>© Вальв Тек Груп, 2017–2025. Все права защищены.</p>
          <a href="#privacy">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}


