import React from 'react'

export default function ModuleAdminContacts() {
  const [phone, setPhone] = React.useState('');
  const [tg, setTg] = React.useState('');
  const [wa, setWa] = React.useState('');
  const [mainEmail, setMainEmail] = React.useState('');
  const [subEmail, setSubEmail] = React.useState('');
  const [active, setActive] = React.useState('');

  function contactForm() {
/*    useEffect(() => {
      setActive(((name == userInfo.name) && (lastName == userInfo.last_name) && (birthday == userInfo.birth_date) && (phone == userInfo.phone) && (city == userInfo.city) && (sex == userInfo.sex)) ? "disabled" : "");
    }, [name, lastName, phone, city, sex, birthday, userInfo.name, userInfo.last_name, userInfo.birth_date, userInfo.phone, userInfo.city, userInfo.sex])*/

    return (
      <form  action="" className="contact-page-form">
          <label className="switch contact-page-label">
              <p>Телефон</p>
              <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
          <input id="phone" type="text" className="contact-page-input" value={phone} onChange={(e) => setPhone(e.target.value)}/>

          <label className="switch contact-page-label">
              <p>WhatsApp</p>
              <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
          <input id="phone" type="text" className="contact-page-input" value={tg} onChange={(e) => setTg(e.target.value)}/>

          <label className="switch contact-page-label">
              <p>Telegram</p>
              <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
          <input id="phone" type="text" className="contact-page-input" value={wa} onChange={(e) => setWa(e.target.value)}/>

          <input type="submit" className={(active == "disabled") ? "edit-button disabled-edit-button submit-contact" : "edit-button submit-contact"} value="Сохранить изменения" disabled={active}/>
      </form>
    )
  }

  function emailForm() {
/*    useEffect(() => {
      setActive(((name == userInfo.name) && (lastName == userInfo.last_name) && (birthday == userInfo.birth_date) && (phone == userInfo.phone) && (city == userInfo.city) && (sex == userInfo.sex)) ? "disabled" : "");
    }, [name, lastName, phone, city, sex, birthday, userInfo.name, userInfo.last_name, userInfo.birth_date, userInfo.phone, userInfo.city, userInfo.sex])*/

    return (
      <form  action="" className="contact-page-form">
          <label className="switch contact-page-label">
              <p>E-mail, общая информация</p>
              <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
          <input id="phone" type="text" className="contact-page-input" value={mainEmail} onChange={(e) => setMainEmail(e.target.value)}/>

          <label className="switch contact-page-label">
              <p>E-mail, заявки на обучение</p>
              <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
          <input id="phone" type="text" className="contact-page-input" value={subEmail} onChange={(e) => setSubEmail(e.target.value)}/>

          <input type="submit" className={(active == "disabled") ? "edit-button disabled-edit-button submit-contact" : "edit-button submit-contact"} value="Сохранить изменения" disabled={active}/>
      </form>
    )
  }
    return (
      <div className="admin-contacts">
        <div className="contact-left">
            <h2 className="h3-sb contact-page-h">
                Контакты связи
            </h2>
              {contactForm()}
        </div>
        <div className="email-right contact-page-h">
            <h2 className="h3-sb contact-page-h">
                Электронная почта
            </h2>
            {emailForm()}
        </div>
      </div>
        );
  };
