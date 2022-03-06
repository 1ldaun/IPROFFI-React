import React, {useEffect, useState} from 'react'
import send from "../../img/send.svg"
import send_white from "../../img/send-white.svg"
import pin from "../../img/pin.svg"
import close_pin from "../../img/close-pin.svg"
import close_chat from "../../img/close-chat.svg"
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'

export default function AnswerForm({id, reChat, setAlert, alert}) {
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [form, setForm] = useState(false);
  const [accept, setAccept] = useState(false);


  useEffect(() => {
    if (flag)
      axios.post("https://i-proffi.com/api/v1/chat", {
          "message": message,
          "sender": "TEACHER",
          "chat_thread_id": id,
          "hw_status": "NOT_APPROVED"
        }).then((repos) => {
          setAlert(true);
          reChat(true);
      });
  }, [flag]);

  useEffect(() => {
    if (accept)
      axios.post("https://i-proffi.com/api/v1/chat", {
          "sender": "TEACHER",
          "chat_thread_id": id,
          "hw_status": "APPROVED"
        }).then((repos) => {
          setAlert(true);
          reChat(true);
          setAccept(false);
      });
  }, [accept]);

    return (
      <div>
        <div className={form ? "buttons-work" : "buttons-work active"}>
          <div className="button-decline" onClick={() => setForm(true)}>На доработку</div>
          <div className="button-accept" onClick={() => setAccept(true)}>Принять работу</div>
        </div>
        <div className={!form ? "message-answer" : "message-answer active"}>
          <p className="message-pupil">Ваш ответ</p>
          <img src={close_chat} className="closeChat" onClick={() => setForm(false)}/>
        </div>
        <div className={!form ? "new-message" : "new-message active"}>
          <textarea type="text" className="new-message-input" placeholder="Введите сообщение" input={message} onChange={(e) => setMessage(e.target.value)}/>
          <div className="message-buttons">
          <div className="message-button close-message">
            <img src={close_pin} alt=""/>
          </div>
            <div className="message-button active">
              <img src={pin} alt=""/>
            </div>
            <div className={!message ? "message-button active" : "message-button"}>
              <img src={send} alt=""/>
            </div>
            <div className={message ? "message-button plus active" : "message-button plus"} onClick={() => setFlag(true)}>
              <img src={send_white} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
}
