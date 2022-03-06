import React, {useEffect, useState, setState} from 'react'
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import Modal from '../Main/Modal'
import srcCard from "../img/card12x.png"
import mask from "../img/mask.png"
import { Link, animateScroll as scroll } from "react-scroll";



export default function CatalogCardAvailable({card, user}) {

    return (
      <div className="catalog-card">
        <img src={ srcCard } alt="" className="catalog-card-img" />
        <img src={ mask } alt="" className="catalog-card-img-mask" />
        <div className="catalog-card-desc">
          <div className="catalog-card-desc-text">
            <div>
              <h3 className="h3-sb catalog-card-desc-h3">{card.title} </h3>
              <p className="text-reg-2 catalog-card-desc-p p-available">Вам открыт доступ к курсу <br/><span className="available_course-span">до 10 июня 2022</span></p>
            </div>
          </div>
          <NavLink to={'/my_courses'} className="catalog-card-a"><button className="text-reg-2 catalog-card-a-button available">Перейти в «Мои курсы»</button></NavLink>
        </div>
      </div>
    );
  };
