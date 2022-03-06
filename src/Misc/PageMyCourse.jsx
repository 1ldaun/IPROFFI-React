import React, {useEffect, useState, setState} from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import LessonCard from './LessonCard'
import back_img from "../img/back.png"
import axios from 'axios'

export default function PageMyCourse(props) {
  const [flag, setFlag] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lessonCards, setLessonCards] = useState([

  ]);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/courses/available/' + props.id;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data.available_videos;
      setFlag(true);
      setTitle(repos.data.title);
      setDescription(repos.data.description);
      var b = repos.data.available_videos;
      var a = (repos.data.video_count - repos.data.available_videos.length);
      var logg;
      for (var i = 0; i < a; i++){
        console.log(i);
        logg = b.push({
          description: "string",
          status: "locked",
          duration: 0,
          progress_percent: 0,
          q_and_a: [{question: "string", answer: "string"}],
          title: "string",
          url: "string",
          video_id: i,
        })
      }
      setLessonCards(b);
    });
  }, []);
  return (
    <div>
      <div className="current_course-head">
        <NavLink to="/my_courses" className="back_arrow" onClick={() => props.setUpdate(true)}>
          <img src={back_img} alt="" className="back_arrow-img"/>
        </NavLink>
        <h2 className="h2-sb current_course-h2">{title}</h2>
        <p className="text-reg-2 current_course-author">{description}</p>
      </div>

      <div className="current_course-cards">

        {
          lessonCards.map(card => {
            return <LessonCard card={card} key={card.id} course_id={props.id}/>
          })
        }

       </div>
        </div>
  );
};
