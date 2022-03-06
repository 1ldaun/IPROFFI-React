import React, {useEffect, useState} from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import {NavLink, Route, BrowserRouter, Redirect} from 'react-router-dom'

export default function Hash(props) {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  var url = window.location.href;
  var hash = url.match(/Hash\/(.+)/)[0];
  hash = hash.toString().slice(5);
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = ' https://i-proffi.com/api/v1/users/check';
    console.log('imhere');
    axios.get(apiUrl + "?hash=" + hash).then((repos) => {
      console.log(repos);
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
      if (repos.status === 200) {
        cookie.set('hash', hash);
        window.location.href = '/register/3';
      }
    });
  }, [setAppState]);
  return (
      <div className="catalog-content">
        <p>Вы успешно зарегистрированы!</p>
      </div>
  )
  };
