import { useRef, FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Hero.scss'

export function HeroSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const agreement = formData.get('agreement')

    if (!agreement) {
      alert('Необходимо согласие на обработку персональных данных')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Настройте эти значения в вашем EmailJS аккаунте:
      // 1. Создайте сервис в EmailJS (Gmail, Outlook и т.д.)
      // 2. Создайте шаблон письма с полями: {{phone}}, {{email}}, {{to_email}}
      // 3. В настройках шаблона укажите получателя: bergenion@gmail.com
      //    или используйте переменную {{to_email}} в поле "To Email"
      // 4. Получите Public Key, Service ID и Template ID из панели EmailJS
      await emailjs.send(
        'service_3ujq8p7', // Замените на ваш Service ID
        'template_zj15g6g', // Замените на ваш Template ID
        {
          to_email: 'bergenion@gmail.com',
          phone: phone,
          email: email || 'Не указан',
          from_name: 'ValveTech Group Website',
          message: `Новая заявка на консультацию с сайта ValveTech Group.\n\nТелефон: ${phone}\nEmail: ${email || 'Не указан'}`,
        },
        {
          publicKey: 'YIoaqwXH5-JSDM2Tx', // Замените на ваш Public Key
        }
      )

      setSubmitStatus('success')
      formRef.current.reset()
      
      // Скрыть сообщение об успехе через 5 секунд
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      setSubmitStatus('error')
      
      // Скрыть сообщение об ошибке через 5 секунд
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              ref={formRef}
              className="vtg-form"
              onSubmit={handleSubmit}
            >
              <label className="vtg-form__field">
                <span>Ваш телефон*</span>
                <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" />
              </label>
              <label className="vtg-form__field">
                <span>Ваш email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="vtg-form__checkbox">
                <input type="checkbox" name="agreement" defaultChecked />
                <span>Я согласен на обработку персональных данных</span>
              </label>
              <button 
                type="submit"
                className="vtg-button vtg-button--primary vtg-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
              </button>
              {submitStatus === 'success' && (
                <p className="vtg-form__hint" style={{ color: '#4caf50' }}>
                  Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="vtg-form__hint" style={{ color: '#ff5252' }}>
                  Произошла ошибка при отправке. Попробуйте позже или свяжитесь с нами по телефону.
                </p>
              )}
              {submitStatus === null && (
                <p className="vtg-form__hint">
                  Отправляя заявку, вы даёте согласие на обработку персональных данных.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

