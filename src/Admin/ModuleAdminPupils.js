import React, {useEffect, useState} from 'react'
import RowArchivePupils from './RowArchivePupils'
import RowActivePupils from './RowActivePupils'
import RowActivePupilsDz from './RowActivePupilsDz'
import RowRequestPupils from './RowRequestPupils'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import hw from "../img/dz.svg"
import hwActive from "../img/dz-active.svg"
import axios from 'axios'

export default function ModuleAdminPupils(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [searchTerm5, setSearchTerm5] = useState("Все");
  const [searchTerm6, setSearchTerm6] = useState("");
  const [filterDz, setFilterDz] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [allUsers, setAllUsers] = useState(props.users);

  const [courses, setCourses] = useState([
    {id:0, name:'Все'},
  ]
  );


useEffect(() => {
  const apiUrl = ' https://i-proffi.com/api/v1/courses';
  axios.get(apiUrl).then((repos) => {
    const allRepos = repos.data;
    setCourses(allRepos);

  });
}, []);
  const [optionsCourse, setOptionsCourse] = useState(courses.map((option) =>
    <option value={option.title}>{option.title}</option>
  ));
  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/users/active';
    axios.get(apiUrl).then((repos) => {
      setActiveUsers(repos.data);
      for (var i = 0; i < activeUsers.length; i++){
        if (allUsers.findIndex(user => user.user_id == activeUsers[i].user_id)) {
          let b = allUsers;
          b.splice(allUsers.findIndex(user => user.user_id == activeUsers[i].user_id), 1);
          setAllUsers(b);
        }
      }
      console.log("active", activeUsers);
      console.log("non-active", allUsers);
    });
  }, []);


      return (
        <div className="admin-pupils">
          <div className="pupils-nav">
          <NavLink to="/admin_page/pupils/all" className="h-stats ">
            <p className="">Все ({props.users.filter((val)=> {
              if (val.role == "STUDENT")
              return val;
            }).length + activeUsers.length})</p>
            </NavLink>
            <NavLink to="/admin_page/pupils/active" className="h-stats ">
            <p className="">Проходят обучение ({activeUsers.length})</p>
            </NavLink>
          </div>

          <Route exact path='/admin_page/pupils/all'>
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
                    <p className="admins-p">Статус</p>
                    <select className="admins-select"
                    onChange={(event) => {
                      setSearchTerm5(event.target.value);
                    }} >
                      <option value="Все">Все</option>
                      <option value="Учится">Учатся</option>
                      <option value="Не учатся">Не учатся</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody className="text-reg-2">
              {(searchTerm5 == "Не учатся" || searchTerm5 == "Все") && props.users.filter((val)=> {
                if (val.role == "STUDENT")
                return val;
              }).map(card => {
                return <RowArchivePupils card={card} key={card.user_id} />
              })}

              {(searchTerm5 == "Учится" || searchTerm5 == "Все") && activeUsers.map(card => {
                return <RowActivePupils card={card} key={card.user_id} />
              })}
              </tbody>
            </table>
          </div>
          </Route>

          <Route path='/admin_page/pupils/active'>
          <div className="mobile-table archive">
            <table className="iksweb text-reg-2">
              <thead>
                <tr>
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
                    <p className="admins-p">ДЗ</p>
                    <div className={(filterDz) ? "hw-button active" : "hw-button"} onClick={() => setFilterDz(!filterDz)}>
                      <img src={hwActive} alt="" className={(filterDz) ? "hw-img" : "hw-img hw-none"}/>
                      <img src={hw} alt="" className={(filterDz) ? "hw-img hw-none" : "hw-img"}/>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-reg-2">
              {  activeUsers.map(card => {
                return <RowActivePupilsDz card={card} key={card.user_id} />
              })}
              </tbody>
            </table>
          </div>
        </Route>
        </div>
      );
  };


/*  {  allUsers.filter((val)=> {
    if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm5 === "") && (searchTerm6 === "") && (val.role === "STUDENT")) {
      return val;
    }
    else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
     ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
      ((toString(val.phone).includes(searchTerm3)) || (searchTerm3 === "")) &&
        ((searchTerm5 === "Не учатся") || (searchTerm5 === "Все") || (searchTerm5 === "")) &&
    //     ((val.date.toLowerCase().includes(searchTerm6.toLowerCase())) || (searchTerm6 === "")) &&
       (val.role === "STUDENT")) {
      return val;
    }
    }).map(card => {
    return <RowArchivePupils card={card} key={card.user_id} />
  })}   */
