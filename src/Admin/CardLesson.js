import React from 'react'
import video_blue from "../img/video_blue.svg"

export default function CardLesson({card}) {
    return (
      <div className="current_course-card">
        <div className="current_course-card-img">
          <img src={video_blue} alt="" className=""/>
        </div>
      </div>
    );
  };
