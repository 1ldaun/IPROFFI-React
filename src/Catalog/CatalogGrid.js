import React, {useEffect, useState, setState} from 'react'
import CatalogCard from './CatalogCard'
import CatalogCardAvailable from './CatalogCardAvailable'
import Header from '../Main/Header'
import Footer from '../Main/Footer'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import ReactLoading from 'react-loading';
import axios from 'axios'

export default function CatalogGrid(props) {

  const [buf, setBuf] = useState(0);
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState(false);
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

  function prog() {
    setTimeout(function() {
      setPercent(100);
    }, 1000);
    return <ReactLoading type={'spin'} color={'#2979FF'} height={100} width={100} />
  }

  const [coursesAv, setCoursesAv] = useState([
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

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/courses';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setCourses(allRepos);
    });
  }, []);

  useEffect(() => {
    const apiUrl = 'https://i-proffi.com/api/v1/courses/available';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setCoursesAv(allRepos);
    });
  }, []);

  function check(id){
    for (let i = 0; i < coursesAv.length; i++){
      if (coursesAv[i].course_id == id)
        return true;
    }
    return false;
  }

  if (props.userInfo.token === "")
  return (
    <Redirect to="/login"/>
  )
//  else if (props.userInfo.role === "USER")
  if (courses[0].course_id != 0)
    return (
        <div className="catalog-content">
          <h2 className="h2-sb catalog-content-h2">Каталог курсов ({(courses[0].title == "loading...") ? "loading..." : courses.length})</h2>
                <div className="catalog-content-cards">
        { courses.map(card => {
          if (check(card.course_id)) {
            return <CatalogCardAvailable card={card} key={card.id} user={props.userInfo}/>
          } else {
          return <CatalogCard card={card} key={card.id} user={props.userInfo}/>
        }
        }) }

        <div class="catalog-card-info">
        <div class="catalog-card-info-container">
          <img src="img/info.png" alt="" class="catalog-card-info-img"/>
          <p class="text-reg-2 catalog-card-info-p">В ближайшее время здесь будут отображаться новые интересные курсы, разрабатываемые на нашей платформе.</p>
        </div>
      </div>

        </div>
      </div>
    );
    else {
      setTimeout(function() {
        setPercent(100);
      }, 1000);
      return (
        <div className="progress-page">
          <ReactLoading type={'spin'} color={'#2979FF'} height={100} width={100} />
        </div>
      )
  };
  };
