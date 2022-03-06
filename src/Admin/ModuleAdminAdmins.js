import React, {useEffect, useState} from 'react'
import RowAdmins from './RowAdmins'
import Modal from '../Main/Modal'
import addAdmin from "../img/plus-white.svg"
import axios from 'axios'

export default function ModuleAdminAdmins({users, setReload}) {
  const [modalActive, setModalActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");

  const [select, setSelect] = React.useState('');
  const [verSelect, setVerSelect] = React.useState('');

  function RegisterForm() {

    function handleSubmit(event) {
      event.preventDefault();
      setVerSelect(select.split('/')[0]); //Обрезаем до слеша -> получаем айдишник
    }

    return (
      <form className="form-admin-select" action="" onSubmit={handleSubmit}>
        <select className="admins-select new-admin-select" value={select} onChange={(e) => setSelect(e.target.value)}>
          {users.filter((val)=> {
            if (val.role !== "ADMIN")
           return val
         }).map(card => {
           return <option>{card.user_id}/{card.email}</option>
          })}
        </select>
        <input type="submit" className="save-new-course save-new-admin" onClick={() => setModalActive(false)} value="Сохранить"/>
      </form>
    )
  }

  { useEffect(() => {
    axios.patch(' https://i-proffi.com/api/v1/users/' + verSelect, {
      "role": "ADMIN",
    }).then((repos) => {
      const allRepos = repos.data;
      setReload(true);
    });
  }, [verSelect]) }

    return (
      <span className="root-span">
      <div className="admin-admins">
        <p className="text-reg-1 h-teacher">Администраторы ({users.filter((val)=> {if (val.role === "ADMIN") return val}).length})</p>
        <button className="add_course-button text-reg-2" onClick={() => setModalActive(true)}><img src={addAdmin} alt=""/></button>
        <div className="mobile-table">
          <table className="iksweb text-reg-2">
            <thead>
              <tr>
                <th>
                  <p className="admins-p">Регистрация</p>
                  <input className="admins-select"
                   type="date"
                    style={{backgroundImage:"none"}}
                    onChange={(event) => {
                      setSearchTerm4(event.target.value);
                    }} />
                </th>
                <th>
                  <p className="admins-p">Имя Фамилия</p>
                  <input
                  type="text"
                  className="admins-input"
                  placeholder="Поиск"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  />
                </th>
                <th>
                  <p className="admins-p">E-mail</p>
                  <input
                  type="text"
                  className="admins-input"
                  placeholder="Поиск"
                  onChange={(event) => {
                    setSearchTerm2(event.target.value);
                  }}
                  />
                </th>
                <th>
                  <p className="admins-p">Телефон</p>
                  <input
                  type="text"
                  className="admins-input"
                  placeholder="Поиск"
                  onChange={(event) => {
                    setSearchTerm3(event.target.value);
                  }}
                  />
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody className="text-reg-2">
              { users.filter((val)=> {
                if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "") && (val.role === "ADMIN")) {
                  return val
                } else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
                 ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                  ((toString(val.phone).includes(searchTerm3.toLowerCase())) || (searchTerm3 === "")) &&
                /*   ((val.registration_date.toLowerCase().includes(searchTerm4.toLowerCase())) || (searchTerm4 === "")) && */
                   (val.role === "ADMIN")) {
                  return val
                }
                }).map(card => {
                return <RowAdmins card={card} key={card.id} setReload={setReload} />
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
      <div className="new-admin">
        <h2 className="h2-sb new-course-h2 new-admin-h2">Новый администратор</h2>
        <a className="a-div-close" href="#">
          <div className="div-close" onClick={() => setModalActive(false)}>
            <svg className="close" xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.254" viewBox="0 0 14.142 14.254">
              <g id="Сгруппировать_3184" data-name="Сгруппировать 3184" transform="translate(-361.929 -23.984)">
                <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1" />
                <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </a>
        <p className="admins-p new-admin-p text-reg-2">Пользователь / E-mail</p>
        {RegisterForm()}
      </div>
          </Modal>
      </span>
    );
  };
