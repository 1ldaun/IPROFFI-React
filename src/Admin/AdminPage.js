import React, {useEffect, useState, Suspense} from 'react'
import ReactLoading from 'react-loading';
import Header from '../Main/Header'
import Footer from '../Main/Footer'
import cookie from 'js-cookie'
import ModuleAdminStats from './ModuleAdminStats'
import ModuleAdminCourses from './ModuleAdminCourses'
import ModuleAdminAdmins from './ModuleAdminAdmins'
import ModuleAdminTeachers from './ModuleAdminTeachers'
import ModuleAdminPupils from './ModuleAdminPupils'
import ModuleAdminContacts from './ModuleAdminContacts'
import ModuleAdminTechcontent from './ModuleAdminTechcontent'
import ModuleAdminApplications from './ModuleAdminApplications'
import {NavLink, Route, BrowserRouter, Redirect} from 'react-router-dom'
import axios from 'axios'

export default function AdminPage(props) {
  const [reloadUsers, setReloadUsers] = useState(true);
  const [users, setUsers] = useState([
    {id:1, registration_date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:9877898798, course:'Курс номер 1'},
    {id:1, registration_date:'2021-04-05', name:'Елена Фролова', email:'Ivanovmail@gmail.com', phone:9877898798, course:'Курс номер 1', role: "ADMIN"},
  ]);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (reloadUsers) {
    const apiUrl = ' https://i-proffi.com/api/v1/users';
    setReloadUsers(false);
    axios.get(apiUrl).then((repos) => {
      setUsers(repos.data);
    }); }
  }, [reloadUsers]);


  const token = cookie.get('token');
  if (token === "")
    return (
      <Redirect to="/login"/>
    )
    else  if (props.userInfo.role === "TEACHER") {
        alert("У вас нет доступа к этой странице");
        return (
          <Redirect to="/teacher_page"/>
        )
      }
      else if (props.userInfo.role === "STUDENT") {
        alert("У вас нет доступа к этой странице");
        return (
          <Redirect to="/catalog"/>
        )
      }
      else if (users[1].name == "Елена Фролова") {
          setTimeout(function() {
            setPercent(100);
          }, 1000);
          return (
            <div className="progress-page">
              <ReactLoading type={'spin'} color={'#2979FF'} height={100} width={100} />
            </div>
          )
      }
      else
        return (
            <div className="catalog-content">
              <h2 className="h2-sb">Администрация</h2>
              <ul className="admin-nav">
                <NavLink to="/admin_page/stats" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Статистика</li>
                </NavLink>
                <NavLink to="/admin_page/courses" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Курсы</li>
                </NavLink>
                <NavLink to="/admin_page/admins" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Админы</li>
                </NavLink>
                <NavLink to="/admin_page/teachers" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Учителя</li>
                </NavLink>
                <NavLink to="/admin_page/pupils" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Пользователи</li>
                </NavLink>
                <NavLink to="/admin_page/applications" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Заявки</li>
                </NavLink>
                <NavLink to="/admin_page/contacts" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Контакты</li>
                </NavLink>
                <NavLink to="/admin_page/tech_content" className="admin-nav-a">
                  <li className="admin-nav-li text-reg-2">Технический контент</li>
                </NavLink>
              </ul>

              <Route path='/admin_page/stats'>
                <ModuleAdminStats/>
              </Route>

              <Route path='/admin_page/courses'>
                <ModuleAdminCourses users={users}/>
              </Route>

              <Route path='/admin_page/admins'>
                <ModuleAdminAdmins users={users} setReload={setReloadUsers}/>
              </Route>

              <Route path='/admin_page/teachers'>
                <ModuleAdminTeachers setReload={setReloadUsers}/>
              </Route>

              <Route path='/admin_page/pupils'>
                <Redirect to="/admin_page/pupils/all"/>
                <ModuleAdminPupils users={users}/>
              </Route>


              <Route path='/admin_page/contacts'>
                <ModuleAdminContacts/>
              </Route>

              <Route path='/admin_page/tech_content'>
                <ModuleAdminTechcontent/>
              </Route>

              <Route path='/admin_page/applications'>
                <Redirect to="/admin_page/applications/active"/>
                <ModuleAdminApplications/>
              </Route>

              </div>
        )
  };
