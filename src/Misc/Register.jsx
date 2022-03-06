import React, {useEffect, useState} from 'react'
import {NavLink, Route, BrowserRouter, Redirect} from 'react-router-dom'
import api_url from '../App'
import cookie from 'js-cookie'
import axios from 'axios'
import logo_url from '../img/Logo_iP.svg'
import jQuery from "jquery"

export default function Register(props) {

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [verEmail, setVerEmail] = React.useState('');
  const [verName, setVerName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [verLastName, setVerLastName] = React.useState('');

  const [password1, setPassword1] = React.useState('');
  const [verPassword1, setVerPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const [sex, setSex] = React.useState('');
  const [verSex, setVerSex] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [verBirthday, setVerBirthday] = React.useState('');
  const [city, setCity] = React.useState('');
  const [verCity, setVerCity] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [verPhone, setVerPhone] = React.useState('');

  function show_hide_password(target, id){
          var input = document.getElementById(id);
          if (input.getAttribute('type') == 'password') {
            target.classList.add('view');
            input.setAttribute('type', 'text');
          } else {
            target.classList.remove('view');
            input.setAttribute('type', 'password');
          }
          return false;
        };

  function RegisterForm() {

    const [apply, setApply] = React.useState(false);

    function handleSubmit(event) {
      event.preventDefault();
      console.log(apply);
      if (!apply)
        alert("Необходимо согласиться с условиями обработки персональных данных!")
      else {
      setVerEmail(email);
      setVerName(name);
      setVerLastName(lastName);
    }
    }

    return (
      <form className="div-form-register" action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-reg-2 label-sign-in">Имя</label>
          <input type="text" id="name" className="input-sign-in" value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="family_name" className="label-sign-in">Фамилия</label>
          <input type="text" id="family_name" className="input-sign-in" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <label htmlFor="email_reg" className="label-sign-in">Email</label>
          <input type="text" id="email_reg" className="input-sign-in" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label className="homework-check register-check">
              <input type="checkbox" className="homework-check__input" value={apply} onChange={(e) => setApply(!apply)}/>
              <span className="check__box"></span>
              Я согласен с условиями обработки <a className="a-personal-data-register" href="#">персональных данных</a>
            </label>
            </div>
        <div className="div-button-sign-in">
          <input type="submit" className="button-sign-in button-disabled-sign-in button-default-sign-in" value="Зарегистрироваться"/>
        </div>
      </form>
    );

  };

  function PasswordForm() {

    function handleSubmit(event) {
      event.preventDefault();
      if (password1 === password2) {
      setVerPassword1(password1);
    }
    else
      alert("Пароли не совпадают!");
    }

    return (
      <form className="div-form-register form-password" action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password" className="text-reg-1 reg-3-label">Пароль</label>
          <div class="password-div">
            <input type="password" id="password-input" className="input-sign-in" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
            <a href="#" class="password-control2" onClick={(e) => {return show_hide_password(e.target, 'password-input');}}></a>
          </div>
          <label htmlFor="" className="text-reg-3 ">Придумайте пароль, в котором содержится от 8 символов</label>
          <label htmlFor="password_repeat" className="text-reg-1 reg-3-label">Повторите пароль</label>
          <div class="password-div">
            <input type="password" id="password-input2" className="input-sign-in" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            <a href="#" class="password-control2" onClick={(e) => {return show_hide_password(e.target, 'password-input2');}}></a>
          </div>
            </div>
        <div className="div-button-sign-in">
          <input type="submit" className="button-sign-in button-disabled-sign-in button-default-sign-in" value="Дальше"/>
        </div>
      </form>
    );

  };

  function LastForm() {

    function handleSubmit(event) {
      event.preventDefault();
      setVerSex(sex);
      setVerBirthday(birthday);
      setVerCity(city);
      setVerPhone(phone);
    }

    return (
      <form className="div-form-register form-last" action="" onSubmit={handleSubmit}>
        <div>
        <div className="reg-sex">
        <label className="container-sex"> Мужчина <input type="radio" name="sex" value={sex} onChange={(e) => setSex('M')}/><span class="checkmark"></span></label>
        <label className="container-sex"> Женщина <input type="radio" name="sex" value={sex} onChange={(e) => setSex('F')}/><span class="checkmark"></span></label>
        </div>
        <label htmlFor="birthday" className="label-sign-in2">День рождения</label>
        <input type="date" id="birthday" className="input-sign-in" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
        <label htmlFor="city" className="label-sign-in2">Город</label>
        <input type="text" id="city" className="input-sign-in" value={city} onChange={(e) => setCity(e.target.value)}/>
        <label htmlFor="phone" className="label-sign-in2">Номер телефона</label>
        <input required title="Формат: 9001234567" type="tel" id="phone" placeholder="9001234567" pattern="s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" className="input-sign-in" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
        <div className="div-button-sign-in">
          <input type="submit" className="button-sign-in button-disabled-sign-in button-default-sign-in" value="Завершить регистрацию"/>
        </div>
      </form>
    );

  };

    return (
      <div className="body-sign-in_update">
        <a className="a-div-close" href="#" onClick={() => window.history.back()}>
          <div className="div-close">
            <svg className="close" xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.254" viewBox="0 0 14.142 14.254">
              <g id="Сгруппировать_3184" data-name="Сгруппировать 3184" transform="translate(-361.929 -23.984)">
                <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1" />
                <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </a>
        <div className="header-1">
          <img src={logo_url} alt="" className="header-1-img-logo"/>
        </div>
        <Route exact path='/register'>
        <div className="content-register">
          <div className="div-sign-in">
            <div className="reg-title_update">
              <h3 className="h3-sb h3-sign-in h3-register">Зарегистрируйтесь  в iPROFFI</h3>
              <div className="reg-progress">
                1 / 4
              </div>
            </div>
            {RegisterForm()}
            { useEffect(() => {
              axios.post(' https://i-proffi.com/api/v1/users/registration_init', {
                "name": verName,
                "last_name": verLastName,
                "email": verEmail,
              }).then((repos) => {
                const allRepos = repos.data;
                if (repos.status === 200) {
                  window.location.href = ('/Hash/' + repos.data.hash);
                }
              })
              .catch((error) => {
                if (error.status === 409)
                  alert("Данный email уже используется!");
            })
            }, [verEmail, verName, verLastName]) }
            <div className="new-user">
              <p className="text-reg-2 p-new-user">У вас уже есть профиль?</p>
              <NavLink to="/login" className="text-reg-2 a-new-user">Войти</NavLink>
            </div>
          </div>
        </div>
        </Route>

        <Route path='/register/2'>
        <div className="content-register foot">
          <div className="div-sign-in">
            <div className="reg-title">
              <h3 className="h3-sb h3-sign-in h3-register">Проверьте почту</h3>
              <div className="reg-progress">
                2 / 4
            </div>
            </div>
            <p className="reg-2-p">Чтобы продолжить регистрацию, пройдите по ссылке в письме, мы отправили его на mail@mail.ru</p>
          </div>
        </div>
        </Route>

        <Route path='/register/3'>
        <div className="content-register">
          <div className="div-sign-in">
            <div className="reg-title">
              <h3 className="h3-sb h3-sign-in h3-register">Придумайте пароль</h3>
              <div className="reg-progress">
                3 / 4
              </div>
            </div>
            {PasswordForm()}
            { useEffect(() => {
              if (verPassword1) {
                  cookie.set('ps', verPassword1);
                  window.location.href = '/register/4';
                }
            }, [verPassword1]) }
            <div className="new-user">
              <p className="text-reg-2 p-new-user">У вас уже есть профиль?</p>
              <NavLink to="/login" className="text-reg-2 a-new-user">Войти</NavLink>
            </div>
          </div>
        </div>
        </Route>

        <Route path='/register/4'>
        <div className="content-register">
          <div className="div-sign-in">
            <div className="reg-title">
              <h3 className="h3-sb h3-sign-in h3-register">Последний этап</h3>
              <div className="reg-progress">
                4 / 4
            </div>
            </div>
            {LastForm()}
            {console.log(props.state.data)}
            { useEffect(() => {
              if ((verBirthday) && (verCity) && (verPhone)) {
              axios.post(' https://i-proffi.com/api/v1/users/current', {
                "phone": verPhone,
                "city": verCity,
                "hash": cookie.get('hash'),
                "password": cookie.get('ps'),
                "sex": verSex,
                "birth_date": verBirthday
              }).then((repos) => {
                if ((repos.status === 200) && (verBirthday) && (verCity)) {
                  cookie.set('ps', null);
                  window.location.href = '/login';
                }
              })
              .catch((error) => {
                if (error.response.status === 409)
                  alert("Пользователь уже существует!");
                else if (error.response.status === 400)
                  alert("Номер в неверном формате! (Должен быть 9123456789)\n" + cookie.get('hash') + "\n" + cookie.get('ps'));
                else if (error.response.status === 404)
                  alert("Пользователь не найден!");
            }) }
          }, [verBirthday, verCity, verPhone]) }
          <div className="new-user">
            <p className="text-reg-2 p-new-user">У вас уже есть профиль?</p>
            <NavLink to="/login" className="text-reg-2 a-new-user">Войти</NavLink>
          </div>
          </div>
        </div>
        </Route>
        <script src="jquery.maskedinput.js" type="text/javascript"></script>
      </div>

    );
  };
