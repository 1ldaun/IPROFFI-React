import React, {useEffect, useState} from 'react'
import RowApplication from './RowApplication'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'

export default function ModuleAdminApplications(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [searchTerm5, setSearchTerm5] = useState("");
  const [searchTerm6, setSearchTerm6] = useState("");
  const [ready, setReady] = useState(false);
  const [reload_course, setReload_course] = useState(true);

  const [listApplications, setListApplications] = useState([
  {
    "application_id": 0,
    "name": "string",
    "email": "email@domain.com",
    "phone": "9998887766",
    "application_date": "2021-11-09T12:50:03.207Z",
    "course_id": 0,
    "is_registered": true,
    "course": {
      "course_id": 0,
      "title": "string",
      "description": "string",
      "course_pic_url": "string",
      "author_name": "string"
    }
  }
]);

const [courses, setCourses] = useState([
    {
      "course_id": 0,
  "title": "string",
  "description": "string",
  "course_pic_url": "string",
  "author_name": "string",
  "landing_info": {
    "main_img_src": "string",
    "title": "string",
    "name_of_teacher": "string",
    "subtitle": "string",
    "duration": "string",
    "online": "string",
    "education": "string",
    "efficiency": "string",
    "count_company": "string",
    "subtitle_company": "string",
    "count_rubles": "string",
    "subtitle_rubles": "string",
    "course_for": [
      {
        "img_src": "string",
        "title": "string",
        "subtitle": "string"
      }
    ],
    "what_you_learn": [
      {
        "text": "string"
      }
    ],
    "program": {
      "title": "string",
      "subtitles_list": [
        {
          "text": "string"
        }
      ]
    },
    "cv_position": "string",
    "cv_payment": "string",
    "skills_list": [
      {
        "text": "string"
      }
    ]
  },
  "course_products": [
    {
      "discount": 0,
      "discount_type": "P",
      "title": "string",
      "description": "string",
      "duration": "string",
      "price": 0
    }
  ],
  "service_products": [
    {
      "discount": 0,
      "discount_type": "P",
      "title": "string",
      "description": "string",
      "price": 0
    }
  ],
  "videos": [
    {
      "title": "string",
      "description": "string",
      "url": "string",
      "duration": 0,
      "q_and_a": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    }
  ]
  }
  ]);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/courses';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setCourses(allRepos);
    });
  }, []);

  var b = [];

  useEffect(() => {
      const apiUrl = 'https://i-proffi.com/api/v1/users/application';
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setListApplications(allRepos);
      });
    }, []);

    useEffect(() => {
      for (var i = 0; i < listApplications.length; i++){
        if (listApplications[i].course_id == null) {
          var b = listApplications;
          b[i].course.title = "Курс удален";
          setListApplications(b);
          console.log(listApplications);
        }
      }
      if (listApplications[0].application_id != 0)
        setReady(true);
      }, [listApplications]);



  const optionsCourse = courses.map((option) =>
  <option key={option.course_id} value={option.title}>{option.title}</option>
);
      if (!ready)
        return (<div>loading...</div>)
      else
      return (
        <div className="admin-teachers">
          <div className="pupils-nav">
          <NavLink to="/admin_page/applications/active" className="h-stats ">
            <p className="">Зарегистрированные ({listApplications.filter((val) => {
              if (val.is_registered)
                return val;
            }).length})</p>
            </NavLink>
            <NavLink to="/admin_page/applications/archive" className="h-stats ">
            <p className="">Не зарегистрированы ({listApplications.filter((val) => {
              if (!val.is_registered)
                return val;
            }).length})</p>
            </NavLink>
          </div>

          <Route exact path='/admin_page/applications/active'>
          <div className="mobile-table">
            <table className="iksweb text-reg-2">
              <thead>
                <tr>
                  <th>
                    <p className="admins-p">Дата заявки</p>
                    <input className="admins-select"
                     type="date"
                      style={{backgroundImage:"none"}}
                      onChange={(event) => {
                        setSearchTerm5(event.target.value);
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
                    <p className="admins-p">Заявка на курс</p>
                    <select
                    id="courseSelect"
                    className="admins-select"
                    onChange={(event) => {
                      setSearchTerm4(event.target.value);
                    }} >
                      <option value="Все">Все</option>
                      {optionsCourse}
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody className="text-reg-2">
                {  listApplications.filter((val)=> {
                if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "Все") && (val.is_registered)) {
                  return val;
                }
                else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
                 ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                  ((toString(val.phone).includes(searchTerm3)) || (searchTerm3 === "")) &&
                   ((val.course.title.toLowerCase().includes(searchTerm4)) || (searchTerm4 === "Все")) && (val.is_registered))  {
                  return val;
                }
              }).map(card => {
                return <RowApplication card={card} key={card.user_id} />
              })}
              </tbody>
            </table>
          </div>
          </Route>

          <Route path='/admin_page/applications/archive'>
          <div className="mobile-table archive">
            <table className="iksweb text-reg-2">
              <thead>
                <tr>
                  <th>
                    <p className="admins-p">Дата заявки</p>
                      <input className="admins-select"
                       type="date"
                        style={{backgroundImage:"none"}}
                        onChange={(event) => {
                          setSearchTerm5(event.target.value);
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
                    <p className="admins-p">Заявка на курс</p>
                    <select
                    id="courseSelect"
                    className="admins-select"
                    onChange={(event) => {
                      setSearchTerm4(event.target.value);
                    }} >
                    <option value="Все">Все</option>
                      {optionsCourse}
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody className="text-reg-2">
              { listApplications.filter((val)=> {
                if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "Все") && !(val.is_registered)) {
                  return val
                } else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
                 ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                  ((toString(val.phone).includes(searchTerm3)) || (searchTerm3 === "")) &&
                   ((val.course.title.toLowerCase().includes(searchTerm4.toLowerCase())) || (searchTerm4 === "Все")) && !(val.is_registered)) {
                  return val
                }
                }).map(card => {
                return <RowApplication card={card} key={card.id} />
              })}
              </tbody>
            </table>
          </div>
        </Route>
        </div>
      );
  };
