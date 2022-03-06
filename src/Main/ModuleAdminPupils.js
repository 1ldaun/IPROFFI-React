import React from 'react'
import RowArchivePupils from './RowArchivePupils'
import RowActivePupils from './RowActivePupils'
import RowRequestPupils from './RowRequestPupils'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import {useState} from 'react'

export default function ModuleAdminPupils() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [searchTerm5, setSearchTerm5] = useState("");
  const [searchTerm6, setSearchTerm6] = useState("");
  const rowsArchivePupils = [
    {id:1, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
    {id:2, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
    {id:3, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
  ]
  const rowsActivePupils = [
    {id:1, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
    {id:2, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
    {id:3, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
  ]
  const rowsRequestPupils = [
    {id:1, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
    {id:2, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
    {id:3, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:'+7 (903) 123-45-67', course:'Курс номер 1'},
  ]
  const listOfCourses = [
    {id:0, name:''},
    {id:1, name:'Курс номер 1'},
    {id:2, name:'Курс номер 2'},
    {id:3, name:'Курс номер 3'},
    {id:4, name:'дерьмо'},
  ]
  const optionsCourse = listOfCourses.map((option) =>
  <option key={option.id} value={option.name}>{option.name}</option>
);
    return (
      <div className="admin-pupils">
        <div className="pupils-nav">
        <NavLink to="/admin_page/ModuleAdminPupils" className="staticLink">
          <p className="text-reg-1 h-stats">В статусе ученика или заявки ({rowsRequestPupils.length + rowsActivePupils.length})</p>
          </NavLink>
          <NavLink to="/admin_page/ModuleAdminPupils/Archive" className="staticLink">
          <p className="text-reg-1 h-stats h-stats-inactive">В архиве прошли обучение ({rowsArchivePupils.length})</p>
          </NavLink>
        </div>

        <Route exact path='/admin_page/ModuleAdminPupils'>
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
                      setSearchTerm6(event.target.value);
                    }} />
                </th>
                <th>
                  <p className="admins-p">Имя Фамилия</p>
                  <input
                  type="text"
                  className="admins-input"
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
                  onChange={(event) => {
                    setSearchTerm3(event.target.value);
                  }}
                  />
                </th>
                <th>
                  <p className="admins-p">Курсы</p>
                  <select
                  id="courseSelect"
                  className="admins-select"
                  onChange={(event) => {
                    setSearchTerm4(event.target.value);
                  }} >
                    {optionsCourse}
                  </select>
                </th>
                <th>
                  <p className="admins-p">Статус</p>
                  <select className="admins-select"
                  onChange={(event) => {
                    setSearchTerm5(event.target.value);
                  }} >
                    <option value=""></option>
                    <option value="Учится">Учится</option>
                    <option value="Заявка">Заявка</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody className="text-reg-2">
            { rowsActivePupils.filter((val)=> {
              if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "") && (searchTerm5 === "") && (searchTerm6 === "")) {
                return val
              } else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
               ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                ((val.phone.toLowerCase().includes(searchTerm3.toLowerCase())) || (searchTerm3 === "")) &&
                 ((val.course.includes(searchTerm4)) || (searchTerm4 === "")) &&
                  ((searchTerm5 === "Учится") || (searchTerm5 === "")) &&
                   ((val.date.toLowerCase().includes(searchTerm6.toLowerCase())) || (searchTerm6 === ""))) {
                return val
              }
              }).map(card => {
              return <RowActivePupils card={card} key={card.id} />
            })}
            { rowsRequestPupils.filter((val)=> {
              if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "") && (searchTerm5 === "") && (searchTerm6 === "")) {
                return val
              } else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
               ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                ((val.phone.toLowerCase().includes(searchTerm3.toLowerCase())) || (searchTerm3 === "")) &&
                 ((val.course.toLowerCase().includes(searchTerm4.toLowerCase())) || (searchTerm4 === "")) &&
                  ((searchTerm5 === "Заявка") || (searchTerm5 === "")) &&
                   ((val.date.toLowerCase().includes(searchTerm6.toLowerCase())) || (searchTerm6 === ""))) {
                return val
              }
              }).map(card => {
              return <RowRequestPupils card={card} key={card.id} />
            })}
            </tbody>
          </table>
        </div>
        </Route>

        <Route path='/admin_page/ModuleAdminPupils/Archive'>
        <div className="mobile-table archive">
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
                  onChange={(event) => {
                    setSearchTerm3(event.target.value);
                  }}
                  />
                </th>
                <th>
                  <p className="admins-p">Курсы</p>
                  <select
                  id="courseSelect"
                  className="admins-select"
                  onChange={(event) => {
                    setSearchTerm4(event.target.value);
                  }} >
                    {optionsCourse}
                  </select>
                </th>
                <th>
                  <p className="admins-p">Статус</p>
                  <p className="in-archive text-reg-2">
                    В архиве
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="text-reg-2">
            { rowsArchivePupils.filter((val)=> {
              if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "") && (searchTerm6 === "")) {
                return val
              } else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
               ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                ((val.phone.toLowerCase().includes(searchTerm3.toLowerCase())) || (searchTerm3 === "")) &&
                 ((val.course.toLowerCase().includes(searchTerm4.toLowerCase())) || (searchTerm4 === "")) &&
                  ((val.date.toLowerCase().includes(searchTerm6.toLowerCase())) || (searchTerm6 === ""))) {
                return val
              }
              }).map(card => {
              return <RowArchivePupils card={card} key={card.id} />
            })}
            </tbody>
          </table>
        </div>
      </Route>
      </div>
    );
  };
