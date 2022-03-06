import React, {useEffect, useState, setState} from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import ReactLoading from 'react-loading';
import CardMyCourses from './CardMyCourses'
import PageMyCourse from './PageMyCourse'
import Header from '../Main/Header'
import Footer from '../Main/Footer'
import GoodAlert from './GoodAlert'
import axios from 'axios'

export default function MyCourses(props) {
  const [update, setUpdate] = useState(true);
  const [percent, setPercent] = useState(0);
  const [courseCards, setCourseCards] = useState([
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
    },
    "percent_completed": 0,
    "status": "PURCHASED"
  }
]);

    useEffect(() => {
      if (update) {
        setUpdate(false);
        const apiUrl = ' https://i-proffi.com/api/v1/courses/available';
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setCourseCards(allRepos);
      }); }
    }, [update]);
    if (courseCards.length === 0)
      return (
        <div className="catalog-content">
          <h2 className="h2-sb catalog-content-h2">Мои курсы ({courseCards.length})</h2>
          <div className="no_courses">
              <div className="no_courses-div">
                <p className="no_courses-p">Вы можете приобрести курс в разделе «Каталог»</p>
                <NavLink to="/catalog" className="no_courses-button">Перейти в «Каталог»</NavLink>
              </div>
          </div>
        </div>
      )
    else if (courseCards[0].title == "loading...") {
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
          <Route exact path={'/my_courses'} >
            <h2 className="h2-sb catalog-content-h2">Мои курсы ({(courseCards[0].title == "loading...") ? "loading..." : courseCards.length})</h2>
            <div className="catalog-content-cards">
                {
                  courseCards.map(card => {
                    return <CardMyCourses card={card} key={card.id}/>
                  })
                }
            </div>
          </Route>
          {
            courseCards.map(card => {
              return (
              <Route path={'/my_courses/' + card.course_id} >
                <PageMyCourse id={card.course_id} setUpdate={setUpdate}/>
              </Route>
            )
            })
          }
        </div>
      );
  };
