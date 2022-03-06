import React, {useEffect, useState, Suspense} from 'react'
import axios from 'axios'
import Header from '../Main/Header'
import Footer from '../Main/Footer'
import cookie from 'js-cookie'
import ModuleTeacherPupils from './ModuleTeacherPupils'
import ModuleTeacherCourses from './ModuleTeacherCourses'
import ModuleAdminPupils from '../Admin/ModuleAdminPupils'
import ModuleAdminCourses from '../Admin/ModuleAdminCourses'
import {NavLink, Route, BrowserRouter, Redirect} from 'react-router-dom'

export default function TeacherPage(props) {
  const [users, setUsers] = useState([
    {id:1, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:9877898798, course:'Курс номер 1'},
    {id:1, date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:9877898798, course:'Курс номер 1', role: "ADMIN"},
  ]);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/users';
    axios.get(apiUrl).then((repos) => {
      setUsers(repos.data);
    });
  }, []);

  const token = cookie.get('token');
  if (token === "")
    return (
      <Redirect to="/login"/>
    )
  else if (props.userInfo.role === "ADMIN" || props.userInfo.role === "TEACHER")
    return (
        <div className="catalog-content">
          <h2 className="h2-sb">Учительская</h2>
          <ul className="admin-nav">
            <NavLink to="/teacher_page/courses" className="admin-nav-a">
              <li className="admin-nav-li text-reg-2">Курсы</li>
            </NavLink>
            <NavLink to="/teacher_page/pupils" className="admin-nav-a">
              <li className="admin-nav-li text-reg-2">Ученики</li>
            </NavLink>
          </ul>

          <Route path='/teacher_page/pupils'>
          <ModuleTeacherPupils users={users}/>
          </Route>

          <Route path='/teacher_page/courses'>
          <ModuleAdminCourses users={users}/>
          </Route>


          </div>
    )
    else
      return (
        <Redirect to="/catalog"/>
      )
  };
