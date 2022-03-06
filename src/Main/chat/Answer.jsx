import React from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'

export default function Answer({children}) {
    return (
      <div>
        <div className="message-info">
          <p className="message-pupil">Практическое занятие </p>
          <p className="message-pupil-name">(Урок №4)</p>
          <p className="message-time">12:34</p>
        </div>
        <div className="message">
          <p className="message-p-from">{children}</p>
        </div>
      </div>
    )
}
