import React from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import video_blue from "../img/video_blue.svg"
import card_img from "../img/card12x.png"
import PageMyCourse from "./PageMyCourse"

export default function CardMyCourses({card}) {
    return (
      <div className="catalog-card">
        <img src={card_img} alt="" className="catalog-card-img"/>
      <div className="catalog-card-desc my_courses-card-desc">
        <h3 className="h3-sb catalog-card-desc-h3">{card.title}</h3>
        <p className="text-reg-2 catalog-card-desc-p my_courses-card-desc-p">{card.description}</p>
        <NavLink to={"/my_courses/" + String(card.course_id)} className="catalog-card-a-button"><button className="text-reg-2 catalog-card-a-button"><img src={video_blue} alt="" className="my_courses-card-a-button-img"/>Продолжить обучение</button></NavLink>
        <div className="catalog-card-progress">
          <p className="text-reg-3 catalog-card-progress_bar-p">{card.progress_percent ? card.progress_percent : 0}% пройдено</p>
          <div className="catalog-card-progress_bar-empty">
            <div className="catalog-card-progress_bar" style={{width: (card.progress_percent ? card.progress_percent : 0) + "%"}}></div>
          </div>
        </div>
      </div>

      </div>

    );
  };
