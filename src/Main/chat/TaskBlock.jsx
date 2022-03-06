import React, {useState} from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import AnswerForm from "./AnswerForm"
import Task from "./Task"
import GoodAlert from '../../Misc/GoodAlert'

export default function TaskBlock({chat_lines, status, id, reChat, count}) {
  const [alert, setAlert] = useState(false);

  if (id == "notification")
    return (
      <li className="task-block">
      <GoodAlert setActive={setAlert} active={alert}>
        Сообщение отправлено!
      </GoodAlert>
        {chat_lines.map((card) => {
          return (
          <Task card={card} status="notification" isLast={chat_lines[chat_lines.length - 1] == card}>
            {card.message}
          </Task>
        )
        })
      }
      </li>
    )
  else
  return (
  <li className="task-block">
  <GoodAlert setActive={setAlert} active={alert}>
    Сообщение отправлено!
  </GoodAlert>
    {chat_lines.map((card) => {
      return (
      <Task card={card} number={count} status={status} isLast={chat_lines[chat_lines.length - 1] == card}>
        {card.message}
      </Task>
    )
    })
  }

    {((status != "APPROVED") && (status != "PENDING")) && <AnswerForm setAlert={setAlert} alert={alert} reChat={reChat} reChat={reChat} id={id}/>}
  </li>
    )
}
