import React, {useEffect, useState} from 'react'
import send from "../../img/send.svg"
import send_white from "../../img/send-white.svg"
import pin from "../../img/pin.svg"
import close_pin from "../../img/close-pin.svg"
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'

export default function AnswerForm({id, reChat, setAlert, alert}) {
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag)
      axios.post("https://i-proffi.com/api/v1/chat", {
          "message": message,
          "sender": "STUDENT",
          "chat_thread_id": id
        }).then((repos) => {
          setAlert(true);
          reChat(true);
      });
  }, [flag]);

    return (
      <div>
        <div className="message-answer">
          <p className="message-pupil">Ваш ответ</p>
          <p className="message-pupil-name"></p>
        </div>
        <div className="new-message active">
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
