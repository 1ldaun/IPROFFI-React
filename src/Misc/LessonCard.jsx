import React from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import video_blue from "../img/video_blue.svg"
import video from "../img/video.png"
import locked from "../img/locked.png"
import close from "../img/close.svg"
import done from "../img/done.svg"
import completed_lesson from "../img/100lesson.svg"
import Modal from '../Main/Modal'
import {useState, useEffect} from 'react'
import axios from 'axios'

import Plyr from 'plyr'
import 'plyr/dist/plyr.css'


export default function LessonCard(props) {
  const [sendTime, setSendTime] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [curPercent, setCurPercent] = useState(props.card.progress_percent);
  var savedTime = 0;
  const [duration, setDuration] = useState(false);
  var pause = false;
  const [urlId, setUrlId] = useState(0);
  const [opt, setOpt] = useState("desc");

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/videos/callback';
    console.log(Math.trunc( curTime / duration * 100));
    axios.post(apiUrl, {
      "video_id": props.card.video_id,
      "progress_percent": Math.trunc( curTime / duration * 100)
    }).then((repos) => {
      const allRepos = repos.data;
      savedTime = allRepos.progress_percent;
      setCurPercent(allRepos.progress_percent);
    });
  }, [curTime]);

  setInterval( function() {
    var url = window.location.href;
    var v_url = url.match(/\?video_id=(.+)/);
    if (v_url) {
      if (v_url[0].slice(10) != urlId)
        setUrlId(v_url[0].slice(10));
    } else {
      setUrlId(0);
    }
  }, 2000);

    const player = new Plyr(document.getElementById('video-block' + props.card.video_id.toString()));
    player.once("ready", function() {
      setDuration(player.duration);
      player.currentTime = (Math.trunc(props.card.progress_percent * player.duration / 100));
    });

    player.on('play', () => {
          setInterval(function() {
            var url = window.location.href;
            var v_url = url.match(/\?video_id=(.+)/);
            if (!v_url) {
              player.pause();
            }
            if ((player.paused)) {
              if (curPercent < 100) {
              setCurTime(player.currentTime);
            }
            }
          }, 2000);

            setInterval( function() {
              if (savedTime != Math.trunc(player.currentTime / duration * 100)) {
                if (curPercent < 100) {
                setCurTime(player.currentTime);
              }
            }
          }, 30000);
          });

      player.source = {
      type: 'video',
      sources: [
        {
          src: props.card.url,
          provider: 'youtube',
        },
      ],
    };

    function underVideo() {
      if (opt == "desc")
        return (
          <div className="undervideo-desc">
            {props.card.description}
          </div>
        )
      else
        return (
          <div className="undervideo-q_a">
            {props.card.q_and_a[0].question}
          </div>
        )
    }



  const [modalActive, setModalActive] = useState(false)
  if (props.card.status === 'locked'){
    return (
        <div className="current_course-card current_course-card-locked">
          <div className="current_course-card-img">
          <img src={locked} alt="" className=""/>
          </div>
          <div className="current_course-card-info">
            <p className="text-reg-3 current_course-card-info-percent">{(props.card.progress_percent ? props.card.progress_percent : 0)}%</p>
            <p className="text-reg-3 current_course-card-info-duration">{props.card.duration}</p>
          </div>
          <div className="current_course-card-progress">
            <div className="current_course-card-progress_bar" style={{width: (props.card.progress_percent ? props.card.progress_percent : 0) + "%"}}></div>
          </div>
        </div>
    );
    }
    else if (curPercent == 100) {
      return (
        <div className="current_course-card current_course-card-done">
        <img src={completed_lesson} alt="" className="completed_lesson"/>
        <NavLink className="current_course-card-a" to={props.course_id + "?video_id=" + props.card.video_id}>
          <img src={done} alt="" className="current_course-card-done-img"/>
          <div className="current_course-card-img">
          <img src={video_blue} alt="" className=""/>
          </div>
          <div className="current_course-card-info">
            <p className="text-reg-3 current_course-card-info-percent">100%</p>
            <p className="text-reg-3 current_course-card-info-duration">{Math.trunc(duration / 60) + ":" + ((Math.trunc(duration % 60) < 10) ? ("0" + Math.trunc(duration % 60)) : Math.trunc(duration % 60))}</p>
          </div>
          <div className="current_course-card-progress">
            <div className="current_course-card-progress_bar" style={{width: "100%"}}></div>
          </div>
          </NavLink>
          <div className={(urlId == props.card.video_id) ? "video-block__shadow active" : "video-block__shadow"}>
            <NavLink to={"/my_courses" + "/" + props.course_id} onClick={() => pause = true}>
              <img className="close-video" src={close} />
            </NavLink>
          <div className="video-block">
            <video id={'video-block' + props.card.video_id.toString()}/>
          <div className="undervideo-block">
          <div className="undervideo-nav">
            <p className={(opt == "desc") ? "undervideo-nav-a active" : "undervideo-nav-a"} onClick={() => setOpt("desc")}>Краткое описание урока</p>
            <p className={(opt == "q_a") ? "undervideo-nav-a active" : "undervideo-nav-a"} onClick={() => setOpt("q_a")}>Вопросы и ответы</p>
          </div>
          {underVideo()}
          </div>
          </div>
          </div>
        </div>
      )
    }
    else {
      return (
          <div className="current_course-card">
          <NavLink className="current_course-card-a" to={props.course_id + "?video_id=" + props.card.video_id}>
            <div className="current_course-card-img">
              <img src={video} alt="" className=""/>
            </div><div className="current_course-card-info">
            <p className="text-reg-3 current_course-card-info-percent">{curPercent ? curPercent : "0"}%</p>
            <p className="text-reg-3 current_course-card-info-duration">{Math.trunc(duration / 60) + ":" + ((Math.trunc(duration % 60) < 10) ? ("0" + Math.trunc(duration % 60)) : Math.trunc(duration % 60))}</p>
          </div>
          <div className="current_course-card-progress">
            <div className="current_course-card-progress_bar" style={{width: curPercent + "%"}}></div>
          </div>
          </NavLink>
              <div className={(urlId == props.card.video_id) ? "video-block__shadow active" : "video-block__shadow"}>
              <NavLink to={"/my_courses" + "/" + props.course_id} onClick={() => pause = true}>
                <img className="close-video" src={close} />
              </NavLink>
            <div className="video-block">
            <video id={'video-block' + props.card.video_id.toString()}/>
        <div className="undervideo-block">
          <div className="undervideo-nav">
            <p className={(opt == "desc") ? "undervideo-nav-a active" : "undervideo-nav-a"} onClick={() => setOpt("desc")}>Краткое описание урока</p>
            <p className={(opt == "q_a") ? "undervideo-nav-a active" : "undervideo-nav-a"} onClick={() => setOpt("q_a")}>Вопросы и ответы</p>
          </div>
          {underVideo()}
        </div>
        </div>
        </div>
        </div>
      )
    }
  };
