import React, {useEffect, useState, setState} from 'react'
import video_blue from "../img/video_blue.svg"
import Modal from '../Main/Modal'

export default function CardLesson(props) {
    console.log(props);
    return (
      <div>
        <div className="current_course-card" onClick={() => props.setActive(true)}>
          <div className="current_course-card-img">
            <img src={video_blue} alt="" className=""/>
          </div>
        </div>
      </div>
    );
  };
