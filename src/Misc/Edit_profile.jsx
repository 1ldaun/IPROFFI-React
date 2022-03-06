import React, {useEffect, useState} from 'react'
import cookie from 'js-cookie'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import plus from '../img/plus.svg'
import GoodAlert from '../Misc/GoodAlert'

export default function Edit_profile(props) {

  const [userInfo, setUserInfo] = useState(props.userInfo);

  const [city, setCity] = React.useState('');
  const [verCity, setVerCity] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [verBirthday, setVerBirthday] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [verPhone, setVerPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [verPassword1, setVerPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [verEmail, setVerEmail] = React.useState('');
  const [verName, setVerName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [verLastName, setVerLastName] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [verSex, setVerSex] = React.useState('');

  const [reload, setReload] = React.useState(true);
  const [active, setActive] = React.useState("disabled");
  const [activePass, setActivePass] = React.useState("disabled");
  const [alertProfile, setAlertProfile] = React.useState(false);
  const [alertPass, setAlertPass] = React.useState(false);

  function EditProfileForm() {

    function handleSubmit(event) {
      event.preventDefault();
      if (city)
        setVerCity(city);
      else
        setVerCity(userInfo.city);
      if (name)
        setVerName(name);
      else
        setVerName(userInfo.name);
      if (lastName)
        setVerLastName(lastName);
      else
        setVerLastName(userInfo.last_name);
      if (birthday)
        setVerBirthday(birthday);
      else if (userInfo.birth_date)
        setVerBirthday(userInfo.birth_date);
      else
        setVerBirthday("1970-01-01");
      if (phone)
        setVerPhone(phone);
      else
        setVerPhone(userInfo.phone);
      if (sex)
        setVerSex(sex);
      else
        setVerSex(userInfo.sex)
    }

    function init(){
      setName(userInfo.name);
      setLastName(userInfo.last_name);
      setBirthday(userInfo.birth_date);
      setPhone(userInfo.phone);
      setCity(userInfo.city);
      setSex(userInfo.sex);
    }


    if (reload) {
      setReload(false);
      init();
  }

  useEffect(() => {
    setActive(((name == userInfo.name) && (lastName == userInfo.last_name) && (birthday == userInfo.birth_date) && (phone == userInfo.phone) && (city == userInfo.city) && (sex == userInfo.sex)) ? "disabled" : "");
  }, [name, lastName, phone, city, sex, birthday, userInfo.name, userInfo.last_name, userInfo.birth_date, userInfo.phone, userInfo.city, userInfo.sex])

  useEffect(() => {
    setActivePass(((password != "") && (password1 != "") && (password2 != "")) ? "" : "disabled");
  }, [password1, password2, password])



    return (
      <form action="" className="edit-form-left" onSubmit={handleSubmit}>
        <div className="password-edit-h">
          О себе
        </div>
        <div className="name-edit">
          <label htmlFor="name-edit" className="name-edit-label">Имя</label>
          <input id="name-edit" type="text" name="name" className="name-edit-input" placeholder={userInfo.name} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="family_name-edit">
          <label htmlFor="family_name-edit" className="family_name-edit-label">Фамилия</label>
          <input id="family_name-edit" type="text" name="family_name" placeholder={userInfo.last_name} className="family_name-edit-input" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="family_name-edit">
          <label htmlFor="birthday-edit" className="family_name-edit-label">Дата рождения</label>
          <input id="family_name-edit" type="date" name="birthday" className="family_name-edit-input" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
        </div>
        <div className="phone-edit">
          <label htmlFor="phone-edit" className="phone-edit-label">Телефон</label>
          <input id="phone-edit" type="text" name="phone" placeholder={userInfo.phone} className="phone-edit-input" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="city-edit">
          <label htmlFor="city-edit" className="city-edit-label">Город</label>
          <input id="city-edit" type="text" name="city" placeholder={userInfo.city} className="city-edit-input" value={city} onChange={(e) => setCity(e.target.value)}/>
        </div>
        <div className="city-edit">
          <div className="reg-sex">
            <label className="container-sex"> Мужчина <input type="radio" checked={sex == 'M'} name="sex" value={sex} onChange={(e) => setSex('M')}/><span class="checkmark"></span></label>
            <label className="container-sex"> Женщина <input type="radio" checked={sex == 'F'} name="sex" value={sex} onChange={(e) => setSex('F')}/><span class="checkmark"></span></label>
          </div>
        </div>


        <input type="submit" className={(active == "disabled") ? "edit-button disabled-edit-button" : "edit-button"} value="Сохранить изменения" disabled={active}/>
      </form>
    );
  };

  function EditPasswordForm() {

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

    function handleSubmit(event) {
      event.preventDefault();
      if (password1 === password2)
        setVerPassword1(password1)
    }

    return (
      <form action="" className="edit-form-right" onSubmit={handleSubmit}>


        <div className="password-edit-h">
          Изменение пароля
        </div>
        <div className="family_name-edit password-edit">
          <label htmlFor="password-edit" className="family_name-edit-label">Текущий пароль</label>
          <div class="password-div">
            <input type="password" id="password-input" className="input-sign-in" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div class="password-control2" onClick={(e) => {return show_hide_password(e.target, 'password-input');}}></div>
          </div>
          </div>
        <div className="family_name-edit password-edit">
          <label htmlFor="password-edit" className="family_name-edit-label">Новый пароль</label>
          <div class="password-div">
            <input type="password" id="password-input2" className="input-sign-in" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
            <div class="password-control2" onClick={(e) => {return show_hide_password(e.target, 'password-input2');}}></div>
          </div>
        </div>
        <div className="family_name-edit password-edit">
          <label htmlFor="password-edit" className="family_name-edit-label">Повторите пароль</label>
          <div class="password-div">
            <input type="password" id="password-input3" className="input-sign-in" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            <div class="password-control2" onClick={(e) => {return show_hide_password(e.target, 'password-input3');}}></div>
          </div>
        </div>

        <input type="submit" className={(activePass == "disabled") ? "edit-button disabled-edit-button" : "edit-button"} disabled={activePass} value="Сохранить изменения"/>
      </form>
    );
  };



  function logout() {
    cookie.set('hash', null);
    cookie.set('token', null);
    window.location.href = '/login';
  }

  function deleteUser() {
    axios.delete(' https://i-proffi.com/api/v1/users/current').then((repos) => {
      const allRepos = repos.data;
    });
    window.location.href = '/login';
  }
    return (
      <div className="edit_profile_page">
        <GoodAlert setActive={setAlertProfile} active={alertProfile}>
          Данные профиля успешно обновлены!
        </GoodAlert>
        <GoodAlert setActive={setAlertPass} active={alertPass}>
          Пароль успешно обновлен!
        </GoodAlert>
      <div className="edit-form-profile_img">
        <img src="img/profile2x.png" alt="" className="edit-form-profile_img-img"/>
        <img src={plus} alt="" className="edit-form-profile_img-plus"/>
        <a href="#" className="upload-photo">Загрузить фото</a>
      </div>
      {EditProfileForm()}
      {EditPasswordForm()}

      { useEffect(() => {
        axios.patch(' https://i-proffi.com/api/v1/users/current', {
          "name": verName,
          "last_name": verLastName,
          "phone": verPhone,
          "city": verCity,
          "sex": verSex,
          "birth_date": verBirthday
        }).then((repos) => {
          props.setReload_user(true);
          setUserInfo(repos.data);
          setAlertProfile(true);
        });
      }, [verName, verLastName, verPhone, verCity, verSex, verBirthday]) }

      { useEffect(() => {
        if (verPassword1) {
        axios.patch(' https://i-proffi.com/api/v1/users/current', {
          "password": verPassword1,
        }).then((repos) => {
          setAlertPass(true);
        }); }
      }, [verPassword1]) }

      <a href="#" className="text-reg-2 sign-out-a" onClick={logout}>Выйти</a>
      <div className="delete-profile">
        <a href="#" className="text-reg-2 delete-profile-a" onClick={deleteUser}>Удалить профиль</a>
      </div>
      </div>
    );
  };
