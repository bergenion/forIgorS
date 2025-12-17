import { FormEvent } from 'react'
import './Calculator.scss'

export function CalculatorSection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="vtg-section" id="calculator" aria-labelledby="calculator-title">
      <div className="vtg-container">
        <div className="vtg-section__header">
          <p className="vtg-eyebrow">Онлайн калькулятор</p>
          <h2 id="calculator-title">Онлайн-калькулятор теплообменника</h2>
          <p>
            Заполните основные параметры, чтобы получить ориентировочный расчёт
            теплообменника. Для точного подбора наши инженеры свяжутся с вами и уточнят
            детали [{`valvetechgroup.com/heatexchanger/#calculator`}]
            (https://valvetechgroup.com/heatexchanger/#calculator).
          </p>
        </div>

        <div className="vtg-grid vtg-grid--2 calculator__layout">
          <form className="vtg-card vtg-card--bordered vtg-form" onSubmit={handleSubmit}>
            <h3>Основные параметры</h3>

            <div className="vtg-form__field">
              <span>Тепловая мощность</span>
              <input type="text" placeholder="Например, 1,5" />
            </div>

            <div className="vtg-form__field">
              <span>Единицы измерения</span>
              <select>
                <option>Гкал/ч</option>
                <option>ккал/ч</option>
                <option>кВт</option>
                <option>МВт</option>
              </select>
            </div>

            <div className="vtg-form__group">
              <h4>Греющая сторона</h4>
              <div className="vtg-form__field">
                <span>Тип теплоносителя</span>
                <input type="text" placeholder="Вода, пар, антифриз..." />
              </div>
              <div className="vtg-form__field">
                <span>t₁ на входе, °C</span>
                <input type="number" placeholder="Например, 95" />
              </div>
              <div className="vtg-form__field">
                <span>t₂ на выходе, °C</span>
                <input type="number" placeholder="Например, 70" />
              </div>
            </div>

            <div className="vtg-form__group">
              <h4>Нагреваемая сторона</h4>
              <div className="vtg-form__field">
                <span>Тип теплоносителя</span>
                <input type="text" placeholder="Вода, теплоноситель..." />
              </div>
              <div className="vtg-form__field">
                <span>t₃ на входе, °C</span>
                <input type="number" placeholder="Например, 5" />
              </div>
              <div className="vtg-form__field">
                <span>t₄ на выходе, °C</span>
                <input type="number" placeholder="Например, 60" />
              </div>
            </div>

            <div className="vtg-form__group">
              <h4>Контакты</h4>
              <div className="vtg-form__field">
                <span>Ваш телефон*</span>
                <input type="tel" required placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="vtg-form__field">
                <span>Ваш email</span>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <label className="vtg-form__checkbox">
              <input type="checkbox" defaultChecked />
              <span>
                Я согласен на обработку персональных данных и получение информационных
                сообщений.
              </span>
            </label>

            <button className="vtg-button vtg-button--primary vtg-form__submit">
              Отправить параметры
            </button>
            <p className="vtg-form__hint">
              Нажимая кнопку, вы даёте согласие на обработку персональных данных и
              соглашаетесь с политикой конфиденциальности.
            </p>
          </form>

          <article className="vtg-card vtg-card--soft">
            <h3>Как интерпретировать параметры расчёта</h3>
            <p>
              Важно правильно задать температуры на входе и выходе по каждой стороне.
              Например, теплоноситель со стороны сети может заходить при 95 °C и
              возвращаться при 70 °C, а потребитель — заходить при 5 °C и нагреваться до
              60 °C.
            </p>
            <p>
              Чем больше разница температур по греющей стороне, тем компактнее и дешевле
              получится теплообменник — требуется меньше пластин и металла. Но при этом
              важно соблюдать требования по допустимым потерям напора и температурным
              графикам сети.
            </p>
            <p>
              Расход сред, тепловая мощность, допустимые потери напора и запас на
              загрязнение — ключевые параметры, которые учитываются при инженерном
              расчёте. Для нестандартных сред (не &laquo;вода-вода&raquo;) лучше сразу
              обратиться к инженерам: сильно возрастает влияние вязкости, плотности и
              теплопроводности.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

