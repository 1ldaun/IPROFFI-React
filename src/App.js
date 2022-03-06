import React, {useEffect, useState, setState} from 'react'
import cookie from 'js-cookie'
import Header from './Main/Header'
import HeaderAdmin from './Main/HeaderAdmin'
import Footer from './Main/Footer'
import Chat from './Main/chat/Chat.jsx'
import TeacherChat from './Teacher/chat/Chat.jsx'
import CatalogGrid from './Catalog/CatalogGrid'
import AdminPage from './Admin/AdminPage'
import Edit_profile from './Misc/Edit_profile'
import Login from './Misc/Login'
import Register from './Misc/Register'
import MyCourses from './Misc/MyCourses'
import PageMyCourse from './Misc/PageMyCourse'
import LandingPage from './Misc/LandingPage'
import Hash from './Misc/Hash'
import TeacherPage from './Teacher/TeacherPage'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import axios from 'axios'

function App() {
  const [reload_user, setReload_user] = useState(true);
  const [role, setRole] = useState("");
  global.api_url = "http://87f8-178-176-73-88.ngrok.io/api/v1";
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  const [flag, setFlag] = useState(false);
  const [loginState, setLoginState] = useState({
    loading: false,
    data: null
  });
  const [regState, setRegState] = useState({
    data: null,
  });
  const [userInfo, setUserInfo] = useState({
    data: null,
  });
  const [tokenState, setTokenState] = useState("");

  var token = cookie.get('token');
  token = ((token == "") || (token == "null") || (!token)) ? tokenState : token;
  console.log(tokenState);
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    cookie.set('token', token, {expires: 3})
  }
  useEffect(() => {
    const apiUrl = 'https://i-proffi.com/api/v1/users/current';
    if (reload_user) {
      axios.get(apiUrl).then((repos) => {
        setFlag(false);
        setReload_user(false);
        const allRepos = repos.data;
        setAppState({ loading: false, repos: allRepos });
        setRole(allRepos.role);
        setUserInfo({data: allRepos});
      });
    }
  }, [reload_user]);

  function retHeader(){
    if (role === "TEACHER")
      return <HeaderAdmin userInfo={userInfo.data}/>
    else
      return <Header userInfo={userInfo.data}/>
  }
/*  userInfo.data = {
  "user_id": 0,
  "name": "string",
  "last_name": "string",
  "profile_pic_url": "string",
  "email": "email@domail.com",
  "phone": "9998887766",
  "city": "string",
  "role": "ADMIN",
  "status": "ARCHIVED",
  "registration_date": "2021-09-26T20:51:32.101Z",
  "last_seen": "2021-09-26T20:51:32.101Z"
};  */
  if (userInfo.data != null)
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/login' >
      <Redirect to="/my_courses"/>
    </Route>
      <Route path='/catalog'>
      <Header userInfo={userInfo.data} appState={setAppState}/>
      <CatalogGrid userInfo={userInfo.data}/>
      <Footer/>
      </Route>
    <Route path='/landing'>
      <LandingPage/>
      <Footer/>
    </Route>
    <Route path='/admin_page'>
      <HeaderAdmin userInfo={userInfo.data}/>
      <AdminPage userInfo={userInfo.data}/>
      <Footer/>
    </Route>
    <Route path='/teacher_page'>
      <HeaderAdmin userInfo={userInfo.data}/>
      <TeacherPage userInfo={userInfo.data}/>
      <Footer/>
    </Route>
    <Route path='/teacher/chat'>
      <HeaderAdmin userInfo={userInfo.data}/>
      <TeacherChat userInfo={userInfo.data}/>
      <Footer/>
    </Route>
    <Route path='/chat'>
      <Header userInfo={userInfo.data}/>
      <Chat/>
      <Footer/>
    </Route>
    <Route path='/edit_profile'>
      {retHeader()}
      <Edit_profile userInfo={userInfo.data} setReload_user={setReload_user}/>
    </Route>
    <Route path='/register' >
      <Register state={regState} setState={setRegState}/>
    </Route>

    <Route path='/hash'>
      <Hash/>
    </Route>

    <Route path='/my_courses'>
      <Header userInfo={userInfo.data}/>
      <MyCourses userInfo={userInfo.data}/>
      <Footer/>
    </Route>

    <Route>
      <Redirect to="/catalog"/>
    </Route>
    </Switch>
    </BrowserRouter>
  );
  else
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' >
            <Login state={loginState} setState={setLoginState} setToken={setTokenState}/>
          </Route>

          <Route exact path='/'>
            <Redirect to="/login"/>
            <Footer/>
          </Route>

          <Route path='/register' >
            <Register state={regState} setState={setRegState}/>
          </Route>

          <Route path='/landing'>
            <LandingPage/>
            <Footer/>
          </Route>

          <Route path='/hash'>
            <Hash/>
          </Route>
          { ((token == "") || (token == "null") || (!token)) ?
              (
              <Route>
                <Redirect to="/login"/>
              </Route>
            )
            : (<Route>
              </Route>)
        }

        </Switch>
      </BrowserRouter>
    )
}
export default App;
