import React, {useEffect, useState, setState} from 'react'
import RowTeachers from './RowTeachers'
import Modal from '../Main/Modal'
import addAdmin from "../img/plus-white.svg"
import GoodAlert from '../Misc/GoodAlert'
import axios from 'axios'

export default function ModuleAdminTeachers({setReload}) {
  const [modalActive, setModalActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [searchTerm5, setSearchTerm5] = useState("");
  const [select, setSelect] = React.useState('');
  const [verSelect, setVerSelect] = React.useState('');
  const [selectCourse, setSelectCourse] = React.useState('');
  const [verSelectCourse, setVerSelectCourse] = React.useState('');
  const [alert, setAlert] = useState(false);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [rel, setRel] = useState(true);
  const [courses, setCourses] = useState([
    {
    "course_id": 0,
    "title": "loading...",
    "description": "loading...",
    "course_pic_url": "string",
    "author": {
      "user_id": 0,
      "name": "string",
      "last_name": "string",
      "profile_pic_url": "string"
    }
  }
  ]);
  const optionsCourse = courses.map((option) =>
  <option key={option.id} value={option.title}>{option.title}</option>
);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/courses';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setCourses(allRepos);
    });
  }, []);

  useEffect(() => {
    if (rel) {
      setRel(false);
    const apiUrl = ' https://i-proffi.com/api/v1/users/teachers';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setUsers(allRepos);
    });
  }
  }, [rel]);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/users';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAllUsers(allRepos);
    });
  }, []);

function RegisterForm() {

  function handleSubmit(event) {
    event.preventDefault();
    setVerSelect(select.split('/')[0]); //Обрезаем до слеша -> получаем айдишник
    setVerSelectCourse(selectCourse.split('/')[0]); //Обрезаем до . -> получаем айдишник
  }

  return (
    <form className="form-admin-select" action="" onSubmit={handleSubmit}>
    <p className="admins-p new-teacher-p text-reg-2">Пользователь / E-mail</p>
      <select className="admins-select new-admin-select" value={select} onChange={(e) => setSelect(e.target.value)}>
        {allUsers.filter((val)=> {
         return val
       }).map(card => {
         return (<option>{card.user_id}/   {card.name} {card.last_name} {card.email}</option>)
        })}
      </select>
      <p className="admins-p new-teacher-p-2 text-reg-2">Выбрать курсы</p>
      <select className="admins-select new-teacher-select-2" value={selectCourse} onChange={(e) => setSelectCourse(e.target.value)}>
      {courses.map(card => {
       return <option>{card.course_id}/{card.title}</option>
      })}
      </select>
      <input type="submit" className="save-new-course save-new-admin" onClick={() => setModalActive(false)} value="Сохранить"/>
    </form>
  )
}

  { useEffect(() => {
    if (verSelect && verSelectCourse) {
    axios.patch(' https://i-proffi.com/api/v1/users/' + verSelect, {
      "role": "TEACHER",
    }).then((repos) => {
      const allRepos = repos.data;
    });
    var teachers = courses.filter((course)=> {
      if (course.course_id == verSelectCourse)
        return course.teacher_ids;
    });
    teachers.push(parseInt(verSelect));
    axios.patch(' https://i-proffi.com/api/v1/courses/' + verSelectCourse, {
      "teacher_ids": teachers,
    }).then((repos) => {
      const allRepos = repos.data;
      setReload(true);
      setAlert(true);
    });
   }
  }, [verSelect, verSelectCourse]) }

    return (
      <span className="root-span">
      <GoodAlert setActive={setAlert} active={alert}>
        Учитель успешно добавлен!
      </GoodAlert>
      <div className="admin-teachers">
        <p className="text-reg-1 h-teacher">Учителя ({users.filter((val)=> {if (val.role === "TEACHER") return val}).length})</p>
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
                <th/>
              </tr>
            </thead>
            <tbody className="text-reg-2">
            { users.filter((val)=> {
              if ((searchTerm === "") && (searchTerm2 === "") && (searchTerm3 === "") && (searchTerm4 === "") && (val.role === "TEACHER")) {
                return val
              } else if (((val.name.toLowerCase().includes(searchTerm.toLowerCase())) || (searchTerm === "")) &&
               ((val.email.toLowerCase().includes(searchTerm2.toLowerCase())) || (searchTerm2 === "")) &&
                ((toString(val.phone).includes(searchTerm3.toLowerCase())) || (searchTerm3 === "")) &&
              /*   ((val.registration_date.toLowerCase().includes(searchTerm4.toLowerCase())) || (searchTerm4 === "")) && */
                 (val.role === "TEACHER")) {
                return val
              }
              }).map(card => {
              return <RowTeachers card={card} key={card.id} courses={courses} setAlert={setAlert} setRel={setRel} />
            })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
      <div className="new-teacher">
        <h2 className="h2-sb new-course-h2 new-teacher-h2">Новый учитель</h2>
        <a className="a-div-close" href="#" onClick={() => setModalActive(false)}>
          <div className="div-close">
            <svg className="close" xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.254" viewBox="0 0 14.142 14.254">
              <g id="Сгруппировать_3184" data-name="Сгруппировать 3184" transform="translate(-361.929 -23.984)">
                <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1" />
                <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </a>

          {RegisterForm()}
      </div>
    </Modal>
      </span>
    );
  };
