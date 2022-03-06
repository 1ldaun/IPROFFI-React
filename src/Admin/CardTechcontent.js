import React from 'react'
import srcPen from "../img/pen.svg"
import {useState} from 'react'

export default function CatalogCard({card}) {
    const [modalActive, setModalActive] = useState(false)
    return (
      <div className="tech_content-block">
        <p className="tech_content-h">{card.header}</p>
        <p className={modalActive ? "tech_content-p text-reg-2 active" : "tech_content-p text-reg-2"}>{card.description}</p>
        <div className={modalActive ? "edit_tech_content active" : "edit_tech_content"} >
        <textarea className="tech_content-textarea">{card.description}</textarea>
        <button className="tech_content-button admins-button text-reg-2" onClick={() => setModalActive(false)}>Сохранить</button>
        </div>
        <a href="#" className="read-all">Читать все</a>
        <img src={srcPen} alt="" className="edit-tech_content-block" onClick={() => setModalActive(true)}/>
      </div>
    );
  };
