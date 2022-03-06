import React, {useEffect, useState, setState} from 'react'
import {NavLink, Route, BrowserRouter, Redirect, useHistory} from 'react-router-dom'
import addAdmin from "../img/plus-white.svg"
import video_blue from "../img/video_blue.svg"
import plus_white from "../img/plus-white.svg"
import camera from "../img/camera@2x.png"
import working from "../img/working@2x.png"
import presentation from "../img/presentation@2x.png"
import imgCourse from "../img/business@2x.png"
import chill from "../img/chill@2x.png"
import cosmonavt from "../img/cosmonavt@2x.png"
import robot from "../img/robot@2x.png"
import well from "../img/well@2x.png"
import logo from "../img/Logo_iP.svg"
import question from "../img/question@2x.png"
import axios from 'axios'
import Modal from '../Main/Modal'
import srcCard from "../img/card12x.png"
import { Link, animateScroll as scroll } from "react-scroll";


export default function CatalogCard({props, card, user}) {
  let history = useHistory();
  var count = 0;
  const [couponValue, setCouponValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalLandActive, setModalLandActive] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [applicationFlag, setApplicationFlag] = useState(false);
  const [payment, setPayment] = useState(false);
  const [ret, setRet] = useState(false);

  const [data, setData] = useState({
    "course_id": 0,
    "title": "string",
    "description": "string",
    "course_pic_url": "string",
    "author_name": "string",
    "landing_info": {
      "main_img_src": "string",
      "title": "string",
      "name_of_teacher": "string",
      "subtitle": "string",
      "duration": "string",
      "online": "string",
      "education": "string",
      "efficiency": "string",
      "count_company": "string",
      "subtitle_company": "string",
      "count_rubles": "string",
      "subtitle_rubles": "string",
      "course_for": [
        {
          "img_src": "string",
          "title": "string",
          "subtitle": "string"
        },
        {
          "img_src": "string",
          "title": "string",
          "subtitle": "string"
        },
        {
          "img_src": "string",
          "title": "string",
          "subtitle": "string"
        }
      ],
      "what_you_learn": [
        {
          "text": "string"
        }
      ],
      "program": {
        "title": "string",
        "subtitles_list": [
          {
            "text": "string"
          }
        ]
      },
      "cv_position": "string",
      "cv_payment": "string",
      "skills_list": [
        {
          "text": "string"
        }
      ]
    },
    "course_products": [
      {
        "discount": 0,
        "discount_type": "P",
        "course_product_id": 0,
        "title": "string",
        "description": "string",
        "duration": "string",
        "price": 0
      }
    ],
    "service_products": [
      {
        "discount": 0,
        "discount_type": "P",
        "service_product_id": 0,
        "title": "string",
        "description": "string",
        "price": 0
      }
    ]
  });

  var land_shadow = document.getElementById('land_shadow');

  document.addEventListener('click', function(e) {
    if ((e.target == land_shadow)) {
        setRet(true);
        document.body.style.overflow = "";
    }
  });

  useEffect(() => {
    setRet(false);
    history.push("/catalog");
  }, [ret]);

  const [renderLand, setRenderLand] = useState(false);
  useEffect(() => {
    const apiUrl = 'https://i-proffi.com/api/v1/courses';
    if (renderLand) {
    axios.get(apiUrl).then((repos) => {
      repos.data.map(land => {
        if (land.course_id == card.course_id)
          setData(land);
      })
    });
    document.body.style.overflow = "hidden";
 }
  }, [renderLand]);


  useEffect(() => {
    if (applicationFlag) {
      setApplicationFlag(false);
      axios.post(' https://i-proffi.com/api/v1/users/application', {
        "name": name,
        "email": email,
        "phone": phone,
        "course_id": card.course_id
      }).then((repos) => {
      const allRepos = repos.data;
      setModalActive(true);
    })
    .catch((error) => {
    }) }
  }, [applicationFlag]);

  useEffect(() => {
    if (payment) {
      setPayment(false);
      axios.post(' https://i-proffi.com/api/v1/payments', {
        "promocode": "",
        "course_product_ids": [
          card.course_id
        ],
        "service_product_ids": [
        ]
  }).then((repos) => {
      const allRepos = repos.data;
      if (repos.status === 200) {
        window.location.href = allRepos.payment_link;
      }
    })
    .catch((error) => {
    }) }
  }, [payment]);

  function ApplicationForm() {

    function handleSubmit(event) {
      event.preventDefault();
      setApplicationFlag(true);
    }

    useEffect(() => {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
    }, [])

    return (
      <form id="form" className="register-htmlFor-course" onSubmit={handleSubmit}>
        <div className="register-htmlFor-course-left">
          <p className="h2-reg register-h2">Записаться на курс или
            получить бесплатную
            консультацию</p>
        </div>
        <div className="register-htmlFor-course-right">
          <div className="name">
            <label htmlFor="" className="text-reg-2 label-sign-in h-19">Имя</label>
            <input type="text" id="name" className="input-sign-in" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="phone">
            <label htmlFor="" className="text-reg-2 label-sign-in h-19">Телефон</label>
            <input required title="Формат: 9001234567" type="tel" id="phone" placeholder="9001234567" pattern="s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" className="input-sign-in" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="email-register">
            <label htmlFor="" className="text-reg-2 label-sign-in h-19">Email</label>
            <input type="text" id="email" className="input-sign-in" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
            <div className="div-button-sign-in h1-sign-in">
              <a className="a-button-sign-in"><input type="submit"
                className="button-sign-in button-disabled-sign-in button-default-sign-in"
                value="Записаться на курс"/></a>
          </div>
          <div className="text-reg-3 personal-text">
              <p>Нажимая на кнопку, я соглашаюсь на <a href="#" className="href-1">обработку пероснальных данных</a></p>
          </div>
          </div>
        </form>
    );

  };


    return (
      <div className="catalog-card">
        <img src={ srcCard } alt="" className="catalog-card-img" />
        <div className="catalog-card-desc">
          <div className="catalog-card-desc-text">
            <div>
              <h3 className="h3-sb catalog-card-desc-h3"> {card.title} </h3>
              <p className="text-reg-2 catalog-card-desc-p"> {card.description} </p>
            </div>
            <p className="catalog-card-duration"> {card.landing_info.duration} </p>
          </div>
          <NavLink to={'/catalog/' + card.course_id} className="catalog-card-a" onClick={() => {setRenderLand(true);}}><button className="text-reg-2 catalog-card-a-button">Подробней о курсе <img src="../img/arrow.png" alt="" className="catalog-card-a-button-arrow" /></button></NavLink>
        </div>
        <Route path={'/catalog/' + card.course_id}>
        <div className="land-modal">
          <div id="scroll-land" className="land-modal-content">
          <div id="land_shadow" className="land-shadow">
          <NavLink to='/catalog' onClick={() => {document.body.style.overflow = "";}}>
            <svg className="close-land" style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <g id="Сгруппировать_3707" data-name="Сгруппировать 3707" transform="translate(-21 -169)">
                <path id="Контур_1764" data-name="Контур 1764" d="M6,0H34a6,6,0,0,1,6,6V34a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" transform="translate(21 169)" fill="#212121" opacity="0.145"/>
                <g id="Сгруппировать_3418" data-name="Сгруппировать 3418" transform="translate(-327.5 157.944)">
                  <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#fff" stroke-width="1"/>
                  <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#fff" stroke-width="1"/>
                </g>
              </g>
            </svg>
            </NavLink>

            <div className="land">
            <Link className="a-button-sign-in fixed-button" containerId="scroll-land" to="form" smooth={true}><input type="button"
               className="button-sign-in button-disabled-sign-in button-default-sign-in "
               value="Записаться на курс"/></Link>

            <div className="landing_page-react">

              <div className="business-analyst">


                  <img className="business-analyst-img" src={imgCourse} alt="graphics"/>

                <div className="business-analyst-right">
                  <div className="business-analyst-right-top">
                    <h1 className="h1-sb h-63 marg-0">{data.title}</h1>
                    <p className="text-light h-21">{data.landing_info.name_of_teacher}</p>
                    <p className="text-reg-2 business-text">{data.landing_info.subtitle}</p>
                  </div>

                      <div className="div-button-sign-in">
                        <Link className="a-button-sign-in" to="form" containerId="scroll-land" smooth={true}><input type="button"
                           className="button-sign-in button-disabled-sign-in button-default-sign-in register-button"
                           value="Записаться на курс"/></Link>
                      </div>
                </div>
              </div>

              <div className="business-footer h-57">
                <div className="business-footer-item duration">
                  <div className="blue-sircle">
                  </div>
                  <div className="h-55">
                  <h2 className="h3-sb">Длительность</h2>
                  <p className="text-reg-2">{data.landing_info.duration}</p>
                  </div>
                </div>
                <div className="business-footer-item online">
                  <div className="blue-sircle">
                  </div>
                  <div className="h-55">
                  <h2 className="h3-sb">Онлайн</h2>
                  <p className="text-reg-2">{data.landing_info.online}</p>
                </div>
                </div>
                <div className="business-footer-item studying">
                  <div className="blue-sircle">
                  </div>
                  <div className="h-55">
                  <h2 className="h3-sb">Обучение</h2>
                  <p className="text-reg-2">{data.landing_info.education}</p>
                </div>
                </div>
                <div className="business-footer-item effective">
                  <div className="blue-sircle">
                  </div>
                  <div className="h-55">
                  <h2 className="h3-sb">Эффективность</h2>
                  <p className="text-reg-2">{data.landing_info.efficiency}</p>
                  </div>
                </div>
              </div>

              <div className="specialist-market">
                <div className="specialist-market-item specialist-h">
                  <p className="h2-reg">На рынке требуются<br/>
                    специалисты</p>
                </div>
                <div className="specialist-market-item specialist-block">
                  <h2 className="h2-sb">{data.landing_info.count_company} компаний</h2>
                  <p className="text-reg-2">{data.landing_info.subtitle_company}</p>
                </div>
                <div className="specialist-market-item specialist-block">
                  <h2 className="h2-sb">{data.landing_info.count_rubles} рублей</h2>
                  <p className="text-reg-2">{data.landing_info.subtitle_rubles}</p>
                </div>
              </div>

              <div className="audience">
                <h2 className="h1-sb audience-text">Кому подойдет данный курс</h2>
                <div className="audience-course">
                  <div className="audience-course-item">
                      <img src={chill} alt="chill" className="img-chill img-audience"/>
                    <h2 className="h3-sb audience-text-reg">{data.landing_info.course_for[0].title}</h2>
                    <p className="text-reg-2">{data.landing_info.course_for[0].subtitle}</p>
                  </div>
                  <div className="audience-course-item">
                      <img src={robot} alt="robot" className="img-robot img-audience"/>
                    <h2 className="h3-sb audience-text-reg">{data.landing_info.course_for[1].title}</h2>
                    <p className="text-reg-2">{data.landing_info.course_for[1].subtitle}</p>
                  </div>
                  <div className="audience-course-item">
                      <img src={robot} alt="robot" className="img-robot img-audience"/>
                    <h2 className="h3-sb audience-text-reg">{data.landing_info.course_for[2].title}</h2>
                    <p className="text-reg-2">{data.landing_info.course_for[2].subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="border-reg">
              </div>

              <div className="results-main">
                  <h2 className="h1-sb results-h1">Чему вы научитесь</h2>
                <div className="results">
                      { data.landing_info.what_you_learn.map(card => {
                        return (
                          <div className="results-item">
                            <img src={well} alt="path" className="path"/>
                            <p className="text-reg-2">{card.text}</p>
                          </div>
                        )
                      })}
                </div>
              </div>

              <div className="background-register">
                {ApplicationForm()}
              </div>


            <div className="how-going-block">
              <h2 className="h1-sb">Как проходит обучение</h2>
              <div className="how-going">
                <div className="how-going-item">
                  <div className="how-going-item-left">
                  <div className="sircle-34">
                    <p className="sircle-text">1</p>
                  </div>
                  <div className="how-going-text">
                    <h3 className="how-going-h3">Учим тему</h3>
                    <p className="text-reg-2 lh-20">В кусре - практические<br/>
                      видеоуроки</p>
                  </div>
                </div>

                    <img src={camera} alt="camera" className="how-going-img camera"/>

                </div>
                <div className="how-going-item">
                  <div className="how-going-item-left">
                    <div className="sircle-34">
                      <p className="sircle-text">2</p>
                    </div>
                    <div className="how-going-text">
                    <h3 className="how-going-h3">Выполняете задание</h3>
                    <p className="text-reg-2 lh-20">В том темпе, в котором вам удобно</p>
                      </div>
                      </div>
                    <img src={working} alt="working" className="how-going-img working"/>
                </div>
                <div className="how-going-item">
                  <div className="how-going-item-left">
                  <div className="sircle-34">
                    <p className="sircle-text">3</p>
                  </div>
                  <div className="how-going-text">
                    <h3 className="how-going-h3">Работа с преподавателем</h3>
                    <p className="text-reg-2 lh-20">Закпрепляете знания и исправление ошибок</p>
                    </div>
                    </div>
                    <img src={presentation} alt="presentation" className="how-going-img presentation"/>
                </div>
              </div>
              </div>

              <div className="program">
                <h2 className="h1-sb program-h1">Программа</h2>
                <p className="program-text text-reg-2">{data.landing_info.program.title}</p>

                    <div className="program-list">

                    { data.landing_info.program.subtitles_list.map(card => {
                      if (card.text) {
                        count += 1;
                        return (
                          <div className="program-list-item">
                            <p className="numerate-list text-reg-1">{count}</p>
                            <p className="text-reg-1 program-list-item-text">{card.text}</p>
                          </div>
                        )
                      }
                    })}

                    </div>
              </div>

              <div className="your-resume">
                  <h2 className="h2-reg resume-header">Ваше резюме после обучения</h2>

                <div className="resume-business-analyst">
                  <div className="resume-business-analyst-left">
                    <img src={cosmonavt} alt="cosmonavt" className="cosmonavt"/>
                    <div>
                      <p className="resume-p">Должность</p>
                      <h2 className="resume-h2">{data.landing_info.cv_position}</h2>
                    </div>
                  </div>
                  <div className="resume-business-analyst-right">
                    <p className="resume-p">Зарплата от:</p>
                    <h2 className="resume-h2">{data.landing_info.cv_payment}</h2>
                  </div>
                </div>
                <div className="resume-skills">
                  <h2 className="resume-skills-h2 h3-sb">Профессиональные навыки:</h2>
                  <div className="resume-skills-list">
                  { data.landing_info.skills_list.map(card => {
                    if (card.text) 
                    return (
                      <div className="resume-skills-list-item">
                        <div className="sircle-2">
                        </div>
                        <p className="resume-skills-list-item-text text-reg-2">{card.text}</p>
                      </div>
                    )
                  })}

                </div>
              </div>
              </div>

              <div className="cell-course">
                <div className="price">
                  <h3 className="price-h1">Стоимость курса</h3>
                  <div className="price-right">
                    <h3 className="price-percent h1-sb">-{data.course_products[0].discount}%</h3>
                    <p className="text-reg-2 price-data">{data.course_products[0].duration}</p>
                  </div>
                  <h3 className="price-new h1-sb">{parseInt(data.course_products[0].price) / 100 * (100 - data.course_products[0].discount)} руб.</h3>
                  <h3 className="price-old h2-sb">{data.course_products[0].price} руб.</h3>
                </div>


                {ApplicationForm()}
              </div>
              <Modal active={modalActive} setActive={setModalActive}>
                <div className="request-shadow">
                  <div className="request">
                  <svg className="close-request" onClick={() => setModalActive(false)} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Сгруппировать_1671" data-name="Сгруппировать 1671" transform="translate(-312 -216)">
                      <circle id="Эллипс_394" data-name="Эллипс 394" cx="16" cy="16" r="16" transform="translate(312 216)" fill="#f7f7f7"/>
                      <g id="Сгруппировать_3357" data-name="Сгруппировать 3357" transform="translate(-40.5 200.944)">
                        <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" stroke-width="1"/>
                        <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" stroke-width="1"/>
                      </g>
                    </g>
                  </svg>
                    <div className="request-main">
                      <div className="request-main-left">
                      <svg xmlns="http://www.w3.org/2000/svg" width="244" height="231.585" viewBox="0 0 244 231.585">
                        <g id="Сгруппировать_3362" data-name="Сгруппировать 3362" transform="translate(-66 -248.199)">
                          <g id="Сгруппировать_1672" data-name="Сгруппировать 1672" transform="translate(0 -19)">
                            <text id="Мы_свяжемся_с_вами_в_ближайшее_время" data-name="Мы свяжемся с вами в ближайшее время" transform="translate(66 435.784)" fill="#212121" font-size="16" font-family="SegoeUI, Segoe UI"><tspan x="38.422" y="17">Мы свяжемся с вами в </tspan><tspan x="54.094" y="39">ближайшее время</tspan></text>
                            <text id="Спасибо_за_заявку_" data-name="Спасибо за заявку!" transform="translate(66 396.784)" fill="#212121" font-size="22" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600"><tspan x="23.709" y="24">Спасибо за заявку!</tspan></text>
                          </g>
                          <g id="undraw_Order_confirmed_re_g0if" transform="translate(115 248.199)">
                            <path id="Контур_1694" data-name="Контур 1694" d="M296.062,162.27h-.526V147.847a8.347,8.347,0,0,0-8.347-8.347H256.631a8.347,8.347,0,0,0-8.347,8.347v79.124a8.347,8.347,0,0,0,8.347,8.347h30.556a8.347,8.347,0,0,0,8.347-8.347V172.536h.526Z" transform="translate(-238.313 -139.5)" fill="#3f3d56"/>
                            <path id="Контур_1695" data-name="Контур 1695" d="M298.248,151.783h-3.989a2.962,2.962,0,0,1-2.742,4.08H274.012a2.962,2.962,0,0,1-2.742-4.08h-3.725a6.234,6.234,0,0,0-6.234,6.234v79.008a6.234,6.234,0,0,0,6.234,6.234h30.7a6.234,6.234,0,0,0,6.234-6.234h0V158.016A6.234,6.234,0,0,0,298.248,151.783Z" transform="translate(-249.037 -149.611)" fill="#fff"/>
                            <path id="Контур_1696" data-name="Контур 1696" d="M259.435,679.854H192.069a.177.177,0,0,1,0-.354h67.366a.177.177,0,0,1,0,.354Z" transform="translate(-191.892 -584.021)" fill="#cbcbcb"/>
                            <path id="Ellipse_44" data-name="Ellipse 44" d="M14.931,0A14.931,14.931,0,1,1,0,14.931,14.931,14.931,0,0,1,14.931,0Z" transform="translate(18.928 31.258)" fill="#2979ff"/>
                            <path id="Path_395" data-name="Path 395" d="M351.429,380.077a1.549,1.549,0,0,1-.932-.31l-.017-.013-3.509-2.684a1.559,1.559,0,0,1,1.9-2.475l2.273,1.743,5.371-7.007a1.559,1.559,0,0,1,2.185-.289h0l-.033.046.034-.046a1.561,1.561,0,0,1,.288,2.186l-6.317,8.238a1.56,1.56,0,0,1-1.24.608Z" transform="translate(-319.049 -328.192)" fill="#fff"/>
                            <path id="Контур_1697" data-name="Контур 1697" d="M882.577,603.41a4.643,4.643,0,0,1,.638-.812c.1-.1.205-.2.314-.3a4.976,4.976,0,0,1,8.2,2.83c.729-2.7-1.169-5.353-3.078-7.393s-4.092-4.277-4.081-7.072a5.384,5.384,0,0,1,1.915-3.971c.035-.031.071-.062.107-.092a7.262,7.262,0,0,1,5-1.743c3.395.182,6.359,2.463,8.417,5.17,3.313,4.354,4.765,10.467,2.446,15.424-2.04,4.36-6.392,6.948-10.833,9.03q-.93.436-1.857.846l-.013.005-.087.04-.381.168.058.038.183.118-.189-.114-.057-.034a19.363,19.363,0,0,1-5.9-4.736C881.822,608.691,881.194,605.652,882.577,603.41Z" transform="translate(-759.826 -506.11)" fill="#f1f1f1"/>
                            <path id="Контур_1698" data-name="Контур 1698" d="M903.658,606.6a12.348,12.348,0,0,1,.951,3.453,10.721,10.721,0,0,1-.129,3.185,13.735,13.735,0,0,1-2.754,5.892,19.767,19.767,0,0,1-3.568,3.469q-.93.436-1.857.846l-.013.005-.087.04-.381.168.059.038.183.118-.189-.114-.057-.034a10.83,10.83,0,0,0-6.07-12.951c.1-.1.205-.2.314-.3a11.432,11.432,0,0,1,1.751,1,11.2,11.2,0,0,1,4.236,5.612,11.446,11.446,0,0,1,.248,6.4c.109-.072.219-.145.326-.218a20.069,20.069,0,0,0,5.315-5.034,12.777,12.777,0,0,0,2.267-5.761,11.547,11.547,0,0,0-1.31-6.525,26.745,26.745,0,0,0-4.19-5.953,30.39,30.39,0,0,0-5.618-4.831.218.218,0,0,1-.065-.294.186.186,0,0,1,.107-.092.162.162,0,0,1,.138.028c.255.17.507.341.757.518a30.736,30.736,0,0,1,5.617,5.13A24.743,24.743,0,0,1,903.658,606.6Z" transform="translate(-766.354 -514.226)" fill="#fff"/>
                            <circle id="Ellipse_44-2" data-name="Ellipse 44" cx="3.171" cy="3.171" r="3.171" transform="translate(89.663 0.591)" fill="#f1f1f1"/>
                            <circle id="Ellipse_44-3" data-name="Ellipse 44" cx="1.933" cy="1.933" r="1.933" transform="translate(130.33 45.501)" fill="#f1f1f1"/>
                            <circle id="Ellipse_44-4" data-name="Ellipse 44" cx="1.933" cy="1.933" r="1.933" transform="translate(73.75 50.806)" fill="#f1f1f1"/>
                            <path id="Контур_1699" data-name="Контур 1699" d="M625.284,758.854H692.65a.177.177,0,1,0,0-.354H625.284a.177.177,0,1,0,0,.354Z" transform="translate(-548.51 -649.053)" fill="#cbcbcb"/>
                            <path id="Контур_1700" data-name="Контур 1700" d="M916.45,222.389a2.591,2.591,0,0,0-4.975-1.313l-5.467,6.267,1.6,4.48,5.5-7.323a2.577,2.577,0,0,0,3.34-2.111Z" transform="translate(-779.744 -205.303)" fill="#ffb7b7"/>
                            <path id="Контур_1701" data-name="Контур 1701" d="M612.137,126.269,630.283,106.9l-2.448-3.891-22.76,19.249Z" transform="translate(-498.091 -84.798)" fill="#3f3d56"/>
                            <circle id="Эллипс_470" data-name="Эллипс 470" cx="6.365" cy="6.365" r="6.365" transform="translate(103.631 16.974)" fill="#2f2e41"/>
                            <path id="Контур_1702" data-name="Контур 1702" d="M816.894,233.98a13.347,13.347,0,0,1,4.856-3.14,6.832,6.832,0,0,1,3.679-.457,3.506,3.506,0,0,1,2.73,2.3,4.341,4.341,0,0,1-.444,2.971c-.434.927-1.015,1.786-1.366,2.748a6.271,6.271,0,0,0,6.31,8.41,31.218,31.218,0,0,0-3.5,1.03,3.663,3.663,0,0,1-3.445-.563c-.927-.893-.945-2.346-.9-3.632q.1-2.868.2-5.737a7.288,7.288,0,0,0-.289-2.892,2.484,2.484,0,0,0-2.163-1.7,3.549,3.549,0,0,0-1.987.9,4.06,4.06,0,0,1-1.957.979c-.737.066-1.578-.479-1.523-1.217Z" transform="translate(-706.386 -214.236)" fill="#2f2e41"/>
                            <path id="Контур_1703" data-name="Контур 1703" d="M661.978,462.014a2.591,2.591,0,0,1-1.952-4.761l5.5-6.239,4.651,1-6.542,6.407a2.577,2.577,0,0,1-1.656,3.587Z" transform="translate(-576.157 -395.935)" fill="#ffb7b7"/>
                            <path id="Контур_1704" data-name="Контур 1704" d="M504.438,201.806l-13.706,17.2-4.178-1.918,16.109-25.08Z" transform="translate(-400.526 -158.062)" fill="#3f3d56"/>
                            <path id="Контур_1705" data-name="Контур 1705" d="M510.64,540.972l-3.266-.051.393,11.133h2.873Z" transform="translate(-417.664 -445.279)" fill="#ffb7b7"/>
                            <path id="Контур_1706" data-name="Контур 1706" d="M678.751,738.081h-5.658a3.606,3.606,0,0,0-3.606,3.606v.117h9.264Z" transform="translate(-585.042 -632.244)" fill="#2f2e41"/>
                            <path id="Контур_1707" data-name="Контур 1707" d="M631.552,524.511l-3.568,2.291,7.138,8.587,2.418-1.552Z" transform="translate(-516.949 -431.771)" fill="#ffb7b7"/>
                            <path id="Контур_1708" data-name="Контур 1708" d="M844.652,710.049l-4.761,3.057h0a3.606,3.606,0,0,0-1.086,4.982l.063.1,7.8-5Z" transform="translate(-723.951 -609.169)" fill="#2f2e41"/>
                            <path id="Контур_1709" data-name="Контур 1709" d="M717.165,347.428s-7.928-26.332-10.476-26.688-6.653,6.757-6.653,6.757c-5.323,6.791-10.811,28.789-10.811,28.789s9.149.573,15.838,4.131,14.581-.18,14.581-.18Z" transform="translate(-601.291 -288.684)" fill="#3f3d56"/>
                            <path id="Контур_1710" data-name="Контур 1710" d="M717.165,347.429s-7.928-26.332-10.476-26.688-5.61,6.829-5.61,6.829c-2.652,10.962-11.854,28.717-11.854,28.717s9.149.573,15.838,4.131,14.581-.18,14.581-.18Z" transform="translate(-601.29 -288.684)" opacity="0.1" style={{isolation: "isolate"}}/>
                            <path id="Контур_1711" data-name="Контур 1711" d="M522.1,279.136v13.232l1.557,19.167,7.78,14.5-3.713,2.652L517.11,314.894l-4.2-13.694-6.59,30.314-4.951-.354,3.438-42.03,6.525-11.831Z" transform="translate(-412.725 -228.27)" fill="#2f2e41"/>
                            <path id="Контур_1712" data-name="Контур 1712" d="M751.256,326.811a3.733,3.733,0,0,0-.177,5.128L748.25,338.3l11.139,3.006,3.893-17.395-2.652-2.829c-5.3-.177-5.307-.287-5.307-.287A66.366,66.366,0,0,0,751.256,326.811Z" transform="translate(-649.879 -288.744)" fill="#2979ff"/>
                            <path id="Контур_1713" data-name="Контур 1713" d="M788.13,323.9a4.753,4.753,0,0,0-6.68,1.046A17.294,17.294,0,0,0,779.628,343c5.729,12.608,10.714,19.063,12.74,19.062a.807.807,0,0,0,.26-.041,6.642,6.642,0,0,0,3.378-4.394,2.229,2.229,0,0,0-.707-2.23c-2.287-1.829-6.393-7.525-7.674-15.023a16.619,16.619,0,0,1,1.941-10.352,4.753,4.753,0,0,0-1.375-6.07h0Z" transform="translate(-674.278 -290.534)" fill="#3f3d56"/>
                            <circle id="Эллипс_471" data-name="Эллипс 471" cx="4.686" cy="4.686" r="4.686" transform="translate(101.717 23.104) rotate(-28.663)" fill="#ffb7b7"/>
                            <path id="Контур_1714" data-name="Контур 1714" d="M765.872,254.726h6.766l.069-.971.347.971H774.1l.138-1.925.688,1.925h2.016v-.1a5.061,5.061,0,0,0-5.055-5.055h-.954a5.061,5.061,0,0,0-5.055,5.055Z" transform="translate(-664.385 -230.113)" fill="#2f2e41"/>
                            <path id="Контур_1715" data-name="Контур 1715" d="M810.722,261.448l2.887-.937V253.5h-5.454l.135.135C810.169,255.511,812.259,262.167,810.722,261.448Z" transform="translate(-699.193 -233.343)" fill="#2f2e41"/>
                          </g>
                        </g>
                      </svg>

                      </div>
                      <div className="request-main-right">
                        <p className="request-main-right-p1">Купите курс со скидкой</p>
                        <p className="request-main-right-p2">Цена полного курса составляет <br/> <span className="request-main-right-price">19 576 руб.</span></p>
                        <div className="payment-div">
                          <div className="div-button-sign-in h1-sign-in">
                            <a className="a-button-sign-in" href="#" onClick={() => setPayment(true)}><input type="button"
                              className="button-sign-in button-disabled-sign-in button-default-sign-in"
                              value="Перейти к оплате"/></a>
                          </div>
                          <div className="text-reg-3 personal-text">
                              <p>Нажимая на кнопку, я соглашаюсь с  <a href="#" className="href-1">публичной афертой</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="request-coupon">
                      <div className="request-coupon-div">
                        <p className="request-coupon-p">Введите код купона</p>
                        <input type="text" className="request-coupon-input" value={couponValue} onChange={(e) => setCouponValue(e.target.value)}/>
                      </div>
                      <input id="coupon" type="submit" className="request-coupon-submit" value="Применить код"/>
                    </div>
                  </div>
                </div>
              </Modal>

              </div>

            </div>
          </div>
          </div>
          </div>
        </Route>
      </div>
    );
  };
