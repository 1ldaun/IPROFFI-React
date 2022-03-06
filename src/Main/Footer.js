import React from 'react'
import waSrc from '../img/wa.png';
import tgSrc from '../img/tg.png';

export default function Footer() {
    return (
      <div className="footer">
        <div className="contact-footer">
          <div className="phone-contact-footer">
            <p className="p-phone-contact-footer">8 (800) - 222 - 33 - 00</p>
          </div>
          <a className="a-wa-contact-footer" href="#">
            <img className="wa-contact-footer" src={waSrc} alt="" />
            <div className="wa_mask" />
          </a>
          <a className="a-tg-contact-footer" href="#">
            <img className="tg-contact-footer" src={tgSrc} alt="" />
            <div className="wa_mask" />
          </a>
        </div>
        <div className="text-reg-2 question-footer">
          Если у вас есть вопросы относительно курсов или предложения сотрудничества, мы всегда на связи.
        </div>
        <div className="copyright-footer">
          <p className="text-reg-3 p-copyright-footer">Все права защищены. © 2021 iPROFFI</p>
          <ul className="ul-copyright-footer">
            <li><a href="#" className="text-reg-3 a-copyright-footer">Условия обслуживания</a></li>
            <li>|</li>
            <li><a href="#" className="text-reg-3 a-copyright-footer">Конфиденциальность</a></li>
            <li>|</li>
            <li className="author-ul-copyright-footer"><a href="#" className="text-reg-3 a-copyright-footer">Авторское право</a></li>
          </ul>
        </div>
      </div>
    );
  };
