import React from 'react'
import srcPen from "../img/pen.svg"
import srcCard from "../img/card12x.png"
import {useState} from 'react'

export default function CardCourse(card, active, setActive) {
    const [modalActive, setModalActive] = useState(false);
    return (
      <div className="catalog-card">
        <img src={srcCard} alt="" className="catalog-card-img"/>
        <div className="catalog-card-desc catalog-card-desc-edit">
          <div className="catalog-card-desc-text">
            <div>
              <h3 className="h3-sb catalog-card-desc-h3">{card.title}</h3>
              <p className="text-reg-2 catalog-card-desc-p">{card.description}</p>
            </div>
              <p className="catalog-card-duration">{card.landing_info.duration}</p>
              <div className="cardOptions">
                <div onClick={() => setActive(true)}>
              <img src={srcPen} alt="" className="penCard" />
              </div>
                <svg id="Компонент_27_4" data-name="Компонент 27 – 4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path id="Контур_1294" data-name="Контур 1294" d="M6,0H34a6,6,0,0,1,6,6V34a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" fill="none"/>
              <g id="Сгруппировать_3982" data-name="Сгруппировать 3982">
        <path id="Контур_1294-2" data-name="Контур 1294" d="M6,0H34a6,6,0,0,1,6,6V34a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" fill="none"/>
        <g id="_126468" data-name="126468" transform="translate(11 10)">
          <g id="Сгруппировать_3915" data-name="Сгруппировать 3915">
            <path id="Контур_2178" data-name="Контур 2178" d="M44.133,2.878H39.972V2.2a2.2,2.2,0,0,0-2.2-2.2H33.816a2.2,2.2,0,0,0-2.2,2.2v.678H27.455a.555.555,0,1,0,0,1.11h1V17.031A2.973,2.973,0,0,0,31.427,20h8.734a2.973,2.973,0,0,0,2.969-2.969V3.988h1a.555.555,0,0,0,0-1.11ZM32.726,2.2a1.092,1.092,0,0,1,1.09-1.09h3.956a1.092,1.092,0,0,1,1.09,1.09v.678H32.726Zm9.293,14.831a1.862,1.862,0,0,1-1.859,1.859H31.427a1.862,1.862,0,0,1-1.859-1.859V3.988H42.023V17.031Z" transform="translate(-26.9)" fill="#f44336"/>
            <path id="Контур_2179" data-name="Контур 2179" d="M230.2,155.327a.5.5,0,0,0,.5-.5V145.9a.5.5,0,1,0-1.009,0v8.914A.506.506,0,0,0,230.2,155.327Z" transform="translate(-221.311 -138.767)" fill="#f44336"/>
            <path id="Контур_2180" data-name="Контур 2180" d="M142.1,169.017a.5.5,0,0,0,.5-.5V160.7a.5.5,0,1,0-1.009,0v7.808A.5.5,0,0,0,142.1,169.017Z" transform="translate(-136.855 -153.048)" fill="#f44336"/>
            <path id="Контур_2181" data-name="Контур 2181" d="M318.3,169.017a.5.5,0,0,0,.5-.5V160.7a.5.5,0,1,0-1.009,0v7.808A.5.5,0,0,0,318.3,169.017Z" transform="translate(-305.766 -153.048)" fill="#f44336"/>
          </g>
        </g>
      </g>
              </svg>
              </div>
          </div>
        </div>
      </div>
    );
  };
