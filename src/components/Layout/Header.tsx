import './Header.scss'

export function Header() {
  return (
    <header className="vtg-header">
      <div className="vtg-container vtg-header__inner">
        <div className="vtg-header__logo">ValveTech Group</div>
        <nav className="vtg-header__nav">
          <a className="vtg-header__link" href="#heat-exchangers">
            Теплообменники
          </a>
          <a className="vtg-header__link" href="#btp">
            БТП
          </a>
          <a className="vtg-header__link" href="#pumping">
            Насосные станции
          </a>
          <a className="vtg-header__link" href="#catalog">
            Каталог
          </a>
          <a className="vtg-header__link" href="#calculator">
            Калькулятор
          </a>
          <a className="vtg-header__link" href="#delivery">
            Доставка
          </a>
          <a className="vtg-header__link" href="#contacts">
            Контакты
          </a>
        </nav>
        <div className="vtg-header__contacts">
          <a href="tel:+79585784840" className="vtg-header__phone">
            +7 (958) 578-48-40
          </a>
          <button className="vtg-button vtg-button--outline">Заказать звонок</button>
        </div>
      </div>
    </header>
  )
}


