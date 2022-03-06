import React, {useEffect} from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import goodAlert from '../img/good-alert.svg';
import closeAlert from '../img/close-alert.svg';
import {useState} from 'react'

export default function GoodAlert({children, setActive, active}) {

  useEffect ( () => {
    if (active) {
  setTimeout(function() {
    setActive(false);
  }, 5000)
}
}, [active] )

  return (
    <div className={(active) ? "alert active" : "alert"}>
      <div className="alert-message">
        <img src={goodAlert} alt=""/>
        <p className="alert-p">{children}</p>
      </div>
      <img src={closeAlert} alt="" className="close-alert" onClick={() => {console.log("blya"); setActive(false)}}/>
    </div>
  );
};
