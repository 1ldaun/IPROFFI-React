import React from 'react'
import CardCourse from './CardCourse'
import CardLesson from './CardLesson'
import Modal from '../Main/Modal'
import addAdmin from "../img/plus-white.svg"
import video_blue from "../img/video_blue.svg"
import plus_white from "../img/plus-white.svg"
import camera from "../img/camera@2x.png"
import working from "../img/working@2x.png"
import presentation from "../img/presentation@2x.png"
import imgCourse from "../img/business@2x.png"
import {useState} from 'react'

export default function ModuleAdminCourses() {
  const [modalActive, setModalActive] = useState(false);
  const [modalLandingActive, setModalLandingActive] = useState(false);
  const [modalLessonActive, setModalLessonActive] = useState(false)
  const courseCards = [
    {
      id: 1,
      header: 'Бизнес-аналитик',
      description: 'Уникальная онлайн-программа по освоению профессии с нуля',
      duration: '1 месяц'
    }, {
      id: 2,
      header: 'Бизнес-аналитик с нуля',
      description: 'Уникальная онлайн-программа по освоению профессии с нуля',
      duration: '1 месяц'
    }, {
      id: 3,
      header: 'Бизнес-аналитик с нуля',
      description: 'Уникальная онлайн-программа по освоению профессии с нуля',
      duration: '1 месяц'
    }
  ]
  const listOfLessons = [
    {
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }
  ]
  return (<span className="root-span">
    <div className="admin-courses">
      <p className="text-reg-1 h-stats">Курсы (3)</p>
      <button className="add_course-button text-reg-2" onClick={() => setModalActive(true)}><img src={addAdmin} alt="" style={{
      marginRight: "13px"
    }}/>
        Добавить курс</button>

      {
        courseCards.map(card => {
          return <CardCourse card={card} key={card.id} active={modalActive} setActive={setModalActive}/>
        })
      }

    </div>
    <Modal active={modalActive} setActive={setModalActive}>
      <div className="new-course">
        <h2 className="h2-sb new-course-h2">Новый курс</h2>
        <a className="a-div-close" href="#" onClick={() => setModalActive(false)}>
          <div className="div-close">
            <svg className="close" xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.254" viewBox="0 0 14.142 14.254">
              <g id="Сгруппировать_3184" data-name="Сгруппировать 3184" transform="translate(-361.929 -23.984)">
                <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1"/>
                <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1"/>
              </g>
            </svg>
          </div>
        </a>
        <form className="new-course-form">
          <label htmlFor="" className="new-course-label">Название курса</label>
          <input type="text" className="new-course-input inp-sz-2"/>

          <label htmlFor="" className="new-course-label">Описание курса</label>
          <textarea className="new-course-input inp-sz-2 new-course-input-desc"></textarea>

          <label htmlFor="" className="new-course-label">Цена</label>
          <input type="text" className="new-course-input inp-sz-2"/>

          <div className="new-course-block">
            <label htmlFor="" className="new-course-label">Скидка</label>
            <select type="text" className="new-course-input inp-sz-1">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
          </div>

          <div className="new-course-block">
            <label htmlFor="" className="new-course-label">Срок скидки</label>
            <input type="text" className="new-course-input inp-sz-1"/>
          </div>

          <div className="new-course-block">
            <label htmlFor="" className="new-course-label">Интервал уроков</label>
            <select type="text" className="new-course-input inp-sz-1">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
          </div>

          <div className="new-course-block">
            <label htmlFor="" className="new-course-label">Период обучения</label>
            <select type="text" className="new-course-input inp-sz-1">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
          </div>

          <label htmlFor="" className="new-course-label">Преподаватели (пользователь / e-mail)</label>
          <select type="text" className="new-course-input inp-sz-2">
            <option>Пункт 1</option>
            <option>Пункт 2</option>
          </select>
        </form>
        <div className="add-video-div">
          <p className="add-video-header">Видеоуроки ({listOfLessons.length})</p>
          <div className="add-video">

            {
              listOfLessons.map(card => {
                return <CardLesson card={card} key={card.id}/>
              })
            }

            <div className="current_course-card" onClick={() => setModalLessonActive(true)}>
              <div className="current_course-card-img" style={{
                  backgroundColor: "#2979FF",
                  padding: "25px 27.5px 21px 27.5px"
                }}>
                <img src={plus_white} alt="" className=""/>
              </div>
            </div>

          </div>
          <Modal active={modalLessonActive} setActive={setModalLessonActive}>
          <div className="add-lesson-div__shadow">
          <div className="add-lesson-div">

            <svg onClick={() => setModalLessonActive(false)} className="close-add-lesson-div" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g id="Сгруппировать_1671" data-name="Сгруппировать 1671" transform="translate(-312 -216)">
                <circle id="Эллипс_394" data-name="Эллипс 394" cx="16" cy="16" r="16" transform="translate(312 216)" fill="#f7f7f7"/>
                <g id="Сгруппировать_3357" data-name="Сгруппировать 3357" transform="translate(-40.5 200.944)">
                  <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1"/>
                  <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1"/>
                </g>
              </g>
            </svg>
            <h2 className="h2-add-lesson-div">Добавить видеоурок</h2>
            <div className="upload-lesson-inner">
            <div className="upload-lesson">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g id="Сгруппировать_4232" data-name="Сгруппировать 4232" transform="translate(-233 -112)">
                  <g id="Эллипс_555" data-name="Эллипс 555" transform="translate(233 112)" fill="none" stroke="#3b7bf6" strokeWidth="1">
                    <circle cx="10" cy="10" r="10" stroke="none"/>
                    <circle cx="10" cy="10" r="9.5" fill="none"/>
                  </g>
                  <g id="Сгруппировать_3617" data-name="Сгруппировать 3617" transform="translate(-35.422 360.979) rotate(-45)">
                    <line id="Линия_3" data-name="Линия 3" x2="9.812" y2="0.087" transform="translate(362.282 31.274) rotate(-45)" fill="none" stroke="#3b7bf6" strokeWidth="1"/>
                    <line id="Линия_4" data-name="Линия 4" y1="0.087" x2="9.812" transform="translate(362.344 24.275) rotate(45)" fill="none" stroke="#3b7bf6" strokeWidth="1"/>
                  </g>
                </g>
              </svg>
              &nbsp;&nbsp; <p className="upload-lesson-p">Загрузить видеоурок</p>
            </div>
            </div>
            <div className="add-lesson-homework">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">Домашнее задание</p>
                <textarea className="homework-textarea"></textarea>
              </label>
              <div className="homework-img"></div>
            </div>

            <div className="add-lesson-description">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">Описание урока</p>
                <textarea className="homework-textarea"></textarea>
              </label>
            </div>

            <div className="add-lesson-description">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">Вопросы и ответы</p>
                <textarea className="homework-textarea"></textarea>
              </label>
            </div>

            <div className="save-lesson">
              <button className="save-landing-button" onClick={() => setModalLessonActive(false)}>Сохранить</button>
            </div>

          </div>
          </div>
          </Modal>
        </div>

          <div className="format-lending-course">
            <p className="format-lending-header">Форматировать Lending курса</p>
            <div className="lending">
              <button className="lending-button text-reg-2" onClick={() => setModalLandingActive(true)}>Lending курса</button>
            </div>
          </div>
          <button className="save-new-course" onClick={() => setModalActive(false)}>Сохранить курс</button>

          <Modal active={modalLandingActive} setActive={setModalLandingActive}>
            <div className="modalLanding">
              <div className="body-landing-unregister">
                <span className="modalLanding-close" onClick={() => setModalLandingActive(false)}></span>

                <div className="question-block">
                  <div className="question-none">
                    <img src="img/tg2x.png" alt="telegram" className="tg-img"/>
                    <img src="img/wa2x.png" alt="whatsapp" className="wa-img"/>
                  </div>
                  <img src="img/question@2x.png" alt="question" className="question"/>
                </div>

                <div className="business-analyst">

                  <div className="edit-landing-img">
                    <img className="business-analyst-img" src={imgCourse} alt="graphics"/>
                    <button className="edit-landing-img-button">Загрузить фото</button>
                  </div>

                  <div className="business-analyst-right">
                    <div className="business-analyst-right-top">
                      <label className="edit-landing-label">Название курса</label>
                      <input className="edit-landing-input" value="Бизнес-аналитик с нуля"/>
                      <label className="edit-landing-label">Имя Фамилия преподавателя</label>
                      <input className="edit-landing-input" value="С Еленой Мишлен"/>
                      <label className="edit-landing-label">Текст - мотивация курса</label>
                      <input className="edit-landing-input" value="Всего за месяц вы освоите профессию бизнес аналитика и сможете поднять
                         свой уровень дохода от 90 т.р."/>
                    </div>

                  </div>
                </div>

                <div className="business-footer h-57">
                  <div className="business-footer-item duration">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Длительность</h2>
                      <input className="edit-landing-input" value="1 месяц"/>
                    </div>
                  </div>
                  <div className="business-footer-item online">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Онлайн</h2>
                      <input className="edit-landing-input" value="В удобное время"/>
                    </div>
                  </div>
                  <div className="business-footer-item studying">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Обучение</h2>
                      <input className="edit-landing-input" value="На практике"/>
                    </div>
                  </div>
                  <div className="business-footer-item effective">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Эффективность</h2>
                      <input className="edit-landing-input" value="Персонализировано"/>
                    </div>
                  </div>
                </div>

                <div className="specialist-market">
                  <div className="specialist-market-item specialist-h">
                    <p className="text-big">На рынке требуются<br/>
                      специалисты</p>
                  </div>
                  <div className="specialist-market-item specialist-block">
                    <input className="edit-landing-input " value="500"/>
                    <h2 className="h2-sb h2-edit-company">компаний</h2>
                    <p className="text-reg-2"><input className="edit-landing-input" value="Сейчас ищут бизнес аналитика"/></p>
                  </div>
                  <div className="specialist-market-item specialist-block">
                    <input className="edit-landing-input " value="150 000"/>
                    <h2 className="h2-sb h2-edit-company">рублей</h2>
                    <p className="text-reg-2"><input className="edit-landing-input" value="Зарплата специалиста"/></p>
                  </div>
                </div>

                <div className="audience">
                  <h2 className="h1-sb audience-text">Кому подойдет данный курс</h2>
                  <div className="audience-course">
                    <div className="audience-course-item">
                      <img src="img/chill@2x.png" alt="chill" className="img-chill img-audience"/>
                      <input className="edit-landing-input" value="Новичкам"/>
                      <input className="edit-landing-input" value="Lorem ipsum"/>
                    </div>
                    <div className="audience-course-item">
                      <img src="img/robot@2x.png" alt="robot" className="img-robot img-audience"/>
                      <input className="edit-landing-input" value="Кто в поиске"/>
                      <input className="edit-landing-input" value="Lorem ipsum"/>
                    </div>
                    <div className="audience-course-item">
                      <img src="img/robot@2x.png" alt="robot" className="img-robot img-audience"/>
                      <input className="edit-landing-input" value="Повышение квалификации"/>
                      <input className="edit-landing-input" value="Lorem ipsum"/>
                    </div>

                  </div>
                </div>

                <div className="border-reg"></div>

                <div className="results-main">
                  <h2 className="h1-sb results-h1">Чему вы научитесь</h2>
                  <div className="results">
                    <div className="results-item edit-results-item">
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="results-item edit-results-item">
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="results-item edit-results-item">
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="results-item edit-results-item">
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="results-item edit-results-item">
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="results-item edit-results-item">
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="results-item edit-results-item add-result-item">
                      <svg id="Компонент_30_7" data-name="Компонент 30 – 7" xmlns="http://www.w3.org/2000/svg" width="76" height="75" viewBox="0 0 76 75">
                        <rect id="Прямоугольник_993" data-name="Прямоугольник 993" width="76" height="75" rx="5" fill="#e3f2fd"/>
                        <g id="_1150873" data-name="1150873" transform="translate(21.832 14.999)">
                          <path id="Контур_2186" data-name="Контур 2186" d="M6.55,342.517H10.3a1.877,1.877,0,0,0,1.876-1.877v-5.629h5.629a1.876,1.876,0,0,0,1.876-1.877v-3.753a1.876,1.876,0,0,0-1.876-1.877H12.179v-5.629A1.876,1.876,0,0,0,10.3,320H6.55a1.876,1.876,0,0,0-1.876,1.876v5.629H-.956a1.877,1.877,0,0,0-1.877,1.877v3.753a1.877,1.877,0,0,0,1.877,1.877H4.674v5.629A1.877,1.877,0,0,0,6.55,342.517Zm-7.881-9.382v-3.753a.375.375,0,0,1,.375-.375h6.38a.751.751,0,0,0,.751-.751v-6.38a.375.375,0,0,1,.375-.375H10.3a.375.375,0,0,1,.375.375v6.38a.751.751,0,0,0,.75.751h6.38a.375.375,0,0,1,.375.375v3.753a.375.375,0,0,1-.375.375h-6.38a.751.751,0,0,0-.75.751v6.379a.375.375,0,0,1-.375.375H6.55a.375.375,0,0,1-.375-.375v-6.379a.751.751,0,0,0-.751-.751H-.956A.375.375,0,0,1-1.331,333.135Zm0,0" transform="translate(8 -308.516)" fill="#2979ff"/>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="background-register"></div>

                <div className="how-going-block">
                  <h2 className="h2-sb">Как проходит обучение</h2>
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
                  <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>

                  <div className="program-list">
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                    </div>
                    <div className="program-list-item program-list-item-edit add-program-list-item-edit">
                      <svg id="Компонент_30_7" data-name="Компонент 30 – 7" xmlns="http://www.w3.org/2000/svg" width="76" height="75" viewBox="0 0 76 75">
                        <rect id="Прямоугольник_993" data-name="Прямоугольник 993" width="76" height="75" rx="5" fill="#e3f2fd"/>
                        <g id="_1150873" data-name="1150873" transform="translate(21.832 14.999)">
                          <path id="Контур_2186" data-name="Контур 2186" d="M6.55,342.517H10.3a1.877,1.877,0,0,0,1.876-1.877v-5.629h5.629a1.876,1.876,0,0,0,1.876-1.877v-3.753a1.876,1.876,0,0,0-1.876-1.877H12.179v-5.629A1.876,1.876,0,0,0,10.3,320H6.55a1.876,1.876,0,0,0-1.876,1.876v5.629H-.956a1.877,1.877,0,0,0-1.877,1.877v3.753a1.877,1.877,0,0,0,1.877,1.877H4.674v5.629A1.877,1.877,0,0,0,6.55,342.517Zm-7.881-9.382v-3.753a.375.375,0,0,1,.375-.375h6.38a.751.751,0,0,0,.751-.751v-6.38a.375.375,0,0,1,.375-.375H10.3a.375.375,0,0,1,.375.375v6.38a.751.751,0,0,0,.75.751h6.38a.375.375,0,0,1,.375.375v3.753a.375.375,0,0,1-.375.375h-6.38a.751.751,0,0,0-.75.751v6.379a.375.375,0,0,1-.375.375H6.55a.375.375,0,0,1-.375-.375v-6.379a.751.751,0,0,0-.751-.751H-.956A.375.375,0,0,1-1.331,333.135Zm0,0" transform="translate(8 -308.516)" fill="#2979ff"/>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="your-resume">
                  <h2 className="h2-sb resume-header">Ваше резюме после обучения</h2>

                  <div className="resume-business-analyst">
                    <div className="resume-business-analyst-left">
                      <img src="img/cosmonavt@2x.png" alt="cosmonavt" className="cosmonavt"/>
                      <div>
                        <p className="resume-p">Должность</p>
                        <input className="edit-landing-input" value="Бизнес аналитик"/>
                      </div>
                    </div>
                    <div className="resume-business-analyst-right">
                      <p className="resume-p">Зарплата от:</p>
                      <input className="edit-landing-input" value="90 000р"/>
                    </div>
                  </div>
                  <div className="resume-skills">
                    <h2 className="resume-skills-h2 h3-sb">Профессиональные навыки:</h2>
                    <div className="resume-skills-list">
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cell-course">
                  <div className="price">
                    <h3 className="price-h1">Стоимость курса</h3>
                    <div className="price-right">
                      <h3 className="price-percent h1-sb">-30%</h3>
                      <p className="text-reg-2 price-data">До 15 марта</p>
                    </div>
                    <h3 className="price-new h1-sb">19 576 руб.</h3>
                    <h3 className="price-old h2-sb">28 000 руб.</h3>
                  </div>
                </div>
                <div className="save-landing">
                  <button className="save-landing-button" onClick={() => setModalLandingActive(false)}>Сохранить</button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </Modal>
    </span>
    );
  };
