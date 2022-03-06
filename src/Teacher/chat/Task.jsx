import React from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import done from "../../img/green-done.svg"
import bell from "../../img/bell.svg"

export default function Task({number, children, card, status, isLast}) {
  function printHeader(){
    if (card.sender == "TEACHER")
      return (
        <div className="message-info">
          <p className="message-pupil">Практическое занятие </p>
          <p className="message-pupil-name">(Урок №{number})</p>
          <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
        </div>
      )
    else if (status == "APPROVED" && isLast)
      return (
        <div className="message-info">
          <p className="message-pupil">Работа </p>
          <p className="message-pupil-name" style={{color: "#49CB5C"}}> <img src={done}/> Принят</p>
          <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
        </div>
      )
    else if (status == "APPROVED" && !isLast)
      return (
        <div className="message-info">
          <p className="message-pupil">Работа </p>
          <p className="message-pupil-name" style={{color: "#F44336"}}>На доработку</p>
          <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
        </div>
      )
    else if (status == "PENDING" && isLast)
      return (
        <div className="message-info">
          <p className="message-pupil">Работа </p>
          <p className="message-pupil-name" style={{color: "#2979FF"}}>На проверке</p>
          <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
        </div>
      )
    else if (status == "PENDING" && !isLast)
      return (
        <div className="message-info">
          <p className="message-pupil">Работа </p>
          <p className="message-pupil-name" style={{color: "#F44336"}}>На доработку</p>
          <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
        </div>
      )
    else if (status == "NOT_APPROVED")
    return (
      <div className="message-info">
        <p className="message-pupil">Работа </p>
        <p className="message-pupil-name" style={{color: "#F44336"}}>На доработку</p>
        <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
      </div>
    )
    else if (status == "notification")
    return (
      <div className="message-info">
        <p className="message-pupil"><img src={bell}/> от IPROFFI</p>
        <p className="message-time">{new Date(card.message_date).toLocaleDateString()}</p>
      </div>
    )
  }
    return (
      <div>
        {printHeader()}
        <div className="message">
          <p className={card.sender == "TEACHER" ? "message-p-from" : "message-p-to"}>{children}</p>
        </div>
      </div>
    )
}
