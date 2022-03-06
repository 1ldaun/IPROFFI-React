import React, {useEffect, useState} from 'react'
import cookie from 'js-cookie'
import {NavLink, Route, BrowserRouter, Redirect} from 'react-router-dom'
import axios from 'axios'
import logo from '../img/Logo_iP.svg'



export default function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verEmail, setVerEmail] = React.useState('');
  const [verPassword, setVerPassword] = React.useState('');

function ContactForm() {

  function handleSubmit(event) {
    event.preventDefault();
    setVerEmail(email);
    setVerPassword(password);
  }

  return (
    <form className="div-form-sign-in" action="" onSubmit={handleSubmit}>
      <div style={{width: "100%"}}>
        <label htmlFor="" className="text-reg-2 label-sign-in">Email</label>
        <input type="text" id="email" className="input-sign-in" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="" className="text-reg-2 label-sign-in">Пароль</label>
        <div class="password-div">
          <input type="password" id="password-input" className="input-sign-in" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <a href="#" class="password-control2" onClick={(e) => {return show_hide_password(e.target);}}></a>
        </div>
      </div>
      <div className="div-button-sign-in">
        <a className="a-button-sign-in" href="#"><input type="submit" className="button-sign-in button-disabled-sign-in button-default-sign-in" value="Войти"/></a>
        <a className="text-reg-2 a-sign-in" href="#">Забыли пароль?</a>
      </div>
    </form>
  );

};

function show_hide_password(target){
        var input = document.getElementById('password-input');
        if (input.getAttribute('type') == 'password') {
          target.classList.add('view');
          input.setAttribute('type', 'text');
        } else {
          target.classList.remove('view');
          input.setAttribute('type', 'password');
        }
        return false;
      };

    return (
      <div className="body-sign-in_update">
        <a className="a-div-close" href="#" onClick={() => window.history.back()}>
          <div className="div-close">
            <svg  className="close" xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.254" viewBox="0 0 14.142 14.254">
              <g id="Сгруппировать_3184" data-name="Сгруппировать 3184" transform="translate(-361.929 -23.984)">
                <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1" />
                <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1" />
              </g>
            </svg>
          </div>
          </a>
          <div className="header-1">
            <img src={logo} alt="" className="header-1-img-logo"/>
          </div>
        <div className="content-sign-in">
        <div className="div-sign-in">
          <h3 className="h3-sb h3-sign-in">Войти</h3>
          {ContactForm()}
          { useEffect(() => {
            if (verEmail != "") {
             props.setState({ loading: true });
             axios.post(' https://i-proffi.com/api/v1/auth', {
               "email": email,
               "password": password,
             }).then((repos) => {
               props.setState({data: repos.data, loading: false });
               cookie.set('token', repos.data.token, {expires: 3});
               props.setToken(repos.data.token);
               axios.defaults.headers.common.Authorization = `Bearer ${repos.data.token}`;
               if (repos.data.role === "STUDENT")
                  window.location.href = '/my_courses';
               else if (repos.data.role === "ADMIN")
                  window.location.href = '/admin_page/stats';
               else if (repos.data.role === "TEACHER")
                  window.location.href = '/teacher_page';
             })
             .catch((error) => {
                 alert("Нет пользователя с такими данными!");
           }); }
           }, [verEmail, verPassword]) }
        </div>
        <div className="new-user">
          <p className="text-reg-2 p-new-user">Новый пользователь?</p>
          <NavLink to="/register" className="text-reg-2 a-new-user">Зарегистрируйтесь</NavLink>
        </div>
        </div>

      </div>
    );
  };
