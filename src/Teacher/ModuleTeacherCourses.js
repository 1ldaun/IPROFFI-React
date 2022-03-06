import React, {useEffect, useState, setState} from 'react'
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
import axios from 'axios'


export default function ModuleTeacherCourses(props) {
  const [modalActive, setModalActive] = useState(false);
  const [modalLandingActive, setModalLandingActive] = useState(false);
  const [modalLessonActive, setModalLessonActive] = useState(false);


  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(10);
  const [duration, setDuration] = useState();


  const [title, setTitle] = useState();
  const [name_of_teacher, setName_of_teacher] = useState();
  const [subtitle, setSubtitle] = useState();
  const [durationLand, setDurationLand] = useState();
  const [online, setOnline] = useState();
  const [education, setEducation] = useState();
  const [efficiency, setEfficiency] = useState();
  const [count_company, setCount_company] = useState();
  const [subtitle_company, setSubtitle_company] = useState();
  const [count_rubles, setCount_rubles] = useState();
  const [subtitle_rubles, setSubtitle_rubles] = useState();
  const [course_for0title, setCourseFor0Title] = useState();
  const [course_for0subtitle, setCourseFor0Subtitle] = useState();
  const [course_for1title, setCourseFor1Title] = useState();
  const [course_for1subtitle, setCourseFor1Subtitle] = useState();
  const [course_for2title, setCourseFor2Title] = useState();
  const [course_for2subtitle, setCourseFor2Subtitle] = useState();
  const [programTitle, setProgramTitle] = useState();
  const [cv_position, setСv_position] = useState();
  const [cv_payment, setСv_payment] = useState();
  const [video_id, setVideo_id] = useState();


  const [saveNewCourseFlag, setSaveNewCourseFlag] = useState(false);
  const [edit_course_flag, setEdit_course_flag] = useState(false);
  const [reload_course, setReload_course] = useState(true);
  const [saved_course_id, setSaved_course_id] = useState(0);


  const [edit_lesson_flag, setEdit_lesson_flag] = useState(-1);

  const [what_you_learn, setWhat_you_learn] = useState([{text:""}, {text:""}, {text:""}]);
  const [program, setProgram] = useState([{text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}]);
  const [skills, setSkills] = useState([{text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}]);
  const [newText, setNewText] = useState([]);

  var count = -1;

  function SubmitWhatYouLearn() {
    var b = what_you_learn;
    var a = b.push({text:""});
    setWhat_you_learn(b);
  }

  function EditWhatYouLearn(id, text) {
    var b = what_you_learn;
    b[id] = {text: text};
    setWhat_you_learn(b);
  }


  const [homework, setHomework] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [qA, setQA] = useState("");
  const [lessonUrl, setLessonUrl] = useState("");

  const discountList = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const durationList = ["1 месяц", "2 месяца", "3 месяца", "6 месяцев",];

  const [courses, setCourses] = useState([
    {
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
      "title": "string",
      "description": "string",
      "price": 0
    }
  ],
  "videos": [
    {
      "title": "string",
      "description": "string",
      "url": "string",
      "duration": 0,
      "q_and_a": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    }
  ]
}
  ]);

  useEffect(() => {
    if (reload_course) {
      setReload_course(false);
    const apiUrl = ' https://i-proffi.com/api/v1/courses';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setCourses(allRepos);
    }); }
  }, [reload_course]);
    const [listOfLessons, setListOfLessons] = useState([
/*    {
      "id": 0,
      "title": "string",
      "description": "string",
      "url": "string",
      "duration": 0,
      "q_and_a": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    }, {
      "id": 1,
      "title": "string",
      "description": "string",
      "url": "string",
      "duration": 0,
      "q_and_a": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    },    */
  ]);


  function SubmitLesson() {
    var b = listOfLessons;
    var a = b.push({
      "id": listOfLessons.length,
      "title": homework,
      "description": lessonDescription,
      "url": lessonUrl,
      "duration": 0,
      "q_and_a": [
        {
          "question": qA,
          "answer": "string"
        }
      ]
    });
    setLessonDescription("");
    setLessonUrl("");
    setQA("");
    setHomework("");
    console.log("ebanniysubmit");
    setListOfLessons(b);
  }

  function ClearFields(){
    setName("");
    setDescription("");
    setTitle("");
    setName_of_teacher("");
    setSubtitle("");
    setDurationLand("");
    setOnline("");
    setEducation("");
    setEfficiency("");
    setCount_company("");
    setSubtitle_company("");
    setCount_rubles("");
    setSubtitle_rubles("");
    setCourseFor0Title("");
    setCourseFor1Title("");
    setCourseFor2Title("");
    setCourseFor0Subtitle("");
    setCourseFor1Subtitle("");
    setCourseFor2Subtitle("");
    setWhat_you_learn([{text:""}, {text:""}, {text:""}]);
    setProgramTitle("");
    setProgram([{text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}]);
    setСv_position("");
    setСv_payment("");
    setSkills([{text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}, {text:""}]);
    setDiscount("");
    setPrice("");
    setDuration("");
    setListOfLessons([]);
  }

  function SaveLesson(id) {
    var b = listOfLessons;
    b[id] = {
      "video_id": video_id,
      "title": homework,
      "description": lessonDescription,
      "url": lessonUrl,
      "duration": 0,
      "q_and_a": [
        {
          "question": qA,
          "answer": "string"
        }
      ]
    };
    setLessonDescription("");
    setLessonUrl("");
    setQA("");
    setHomework("");
    setEdit_lesson_flag(-1);
    setListOfLessons(b);
  }

  function GetLesson(id) {
    setVideo_id(listOfLessons[id].video_id);
    setLessonDescription(listOfLessons[id].description);
    setLessonUrl(listOfLessons[id].url);
    setQA(listOfLessons[id].q_and_a[0].question);
    setHomework(listOfLessons[id].title);
  }

  function CloseLesson() {
    setLessonDescription("");
    setLessonUrl("");
    setQA("");
    setHomework("");
  }

  useEffect(() => {
    if (saveNewCourseFlag) {
      setSaveNewCourseFlag(false);
      axios.post(' https://i-proffi.com/api/v1/courses', {
      "title": name,
      "description": description,
      "course_pic_url": "string",
      "author_name": "string",
      "landing_info": {
        "main_img_src": "string",
        "title": title,
        "name_of_teacher": name_of_teacher,
        "subtitle": subtitle,
        "duration": durationLand,
        "online": online,
        "education": education,
        "efficiency": efficiency,
        "count_company": count_company,
        "subtitle_company": subtitle_company,
        "count_rubles": count_rubles,
        "subtitle_rubles": subtitle_rubles,
        "course_for": [
          {
            "img_src": "string",
            "title": course_for0title,
            "subtitle": course_for0subtitle
          },
          {
            "img_src": "string",
            "title": course_for1title,
            "subtitle": course_for1subtitle
          },
          {
            "img_src": "string",
            "title": course_for2title,
            "subtitle": course_for2subtitle
          }
        ],
        "what_you_learn": what_you_learn,
        "program": {
          "title": programTitle,
          "subtitles_list": program
        },
        "cv_position": cv_position,
        "cv_payment": cv_payment,
        "skills_list": skills
      },
      "course_products": [
        {
          "discount": discount,
          "discount_type": "P",
          "title": "string",
          "description": "string",
          "duration": duration,
          "price": parseInt(price)
        }
      ],
      "service_products": [
        {
          "discount": 0,
          "discount_type": "P",
          "title": "string",
          "description": "string",
          "price": 0
        }
      ],
      "videos": listOfLessons
      }).then((repos) => {
      const allRepos = repos.data;
      if (repos.status === 200) {
        alert("Успешно!");
        setReload_course(true);
      }
    })
    .catch((error) => {
  }) }
}, [saveNewCourseFlag]);


useEffect(() => {
  if (edit_course_flag) {
    setEdit_course_flag(false);
    axios.patch('https://i-proffi.com/api/v1/courses/' + saved_course_id, {
    "title": name,
    "description": description,
    "course_pic_url": "string",
    "author_name": "string",
    "landing_info": {
      "main_img_src": "string",
      "title": title,
      "name_of_teacher": name_of_teacher,
      "subtitle": subtitle,
      "duration": durationLand,
      "online": online,
      "education": education,
      "efficiency": efficiency,
      "count_company": count_company,
      "subtitle_company": subtitle_company,
      "count_rubles": count_rubles,
      "subtitle_rubles": subtitle_rubles,
      "course_for": [
        {
          "img_src": "string",
          "title": course_for0title,
          "subtitle": course_for0subtitle
        },
        {
          "img_src": "string",
          "title": course_for1title,
          "subtitle": course_for1subtitle
        },
        {
          "img_src": "string",
          "title": course_for2title,
          "subtitle": course_for2subtitle
        }
      ],
      "what_you_learn": what_you_learn,
      "program": {
        "title": programTitle,
        "subtitles_list": program
      },
      "cv_position": cv_position,
      "cv_payment": cv_payment,
      "skills_list": skills
    },
/*    "course_products": [
      {
        "discount": discount,
        "discount_type": "P",
        "title": "string",
        "description": "string",
        "duration": duration,
        "price": parseInt(price)
      }
    ],
    "service_products": [
      {
        "discount": 0,
        "discount_type": "P",
        "title": "string",
        "description": "string",
        "price": 0
      }
    ],  */
    "videos": listOfLessons
    }).then((repos) => {
    const allRepos = repos.data;
    setSaved_course_id(0);
    ClearFields();
    if (repos.status === 200) {
      alert("Успешно!");
      setReload_course(true);
    }
  })
  .catch((error) => {
}) }
}, [edit_course_flag]);

useEffect(() => {
  if (saved_course_id) {
  const apiUrl = 'https://i-proffi.com/api/v1/courses/full/' + saved_course_id;
  axios.get(apiUrl).then((repos) => {
    const allRepos = repos.data;
    setName(allRepos.title);
    setDescription(allRepos.description);
    setTitle(allRepos.landing_info.title);
    setName_of_teacher(allRepos.landing_info.name_of_teacher);
    setSubtitle(allRepos.landing_info.subtitle);
    setDurationLand(allRepos.landing_info.duration);
    setOnline(allRepos.landing_info.online);
    setEducation(allRepos.landing_info.education);
    setEfficiency(allRepos.landing_info.efficiency);
    setCount_company(allRepos.landing_info.count_company);
    setSubtitle_company(allRepos.landing_info.subtitle_company);
    setCount_rubles(allRepos.landing_info.count_rubles);
    setSubtitle_rubles(allRepos.landing_info.subtitle_rubles);
    setCourseFor0Title(allRepos.landing_info.course_for[0].title);
    setCourseFor1Title(allRepos.landing_info.course_for[1].title);
    setCourseFor2Title(allRepos.landing_info.course_for[2].title);
    setCourseFor0Subtitle(allRepos.landing_info.course_for[0].subtitle);
    setCourseFor1Subtitle(allRepos.landing_info.course_for[1].subtitle);
    setCourseFor2Subtitle(allRepos.landing_info.course_for[2].subtitle);
    setWhat_you_learn(allRepos.landing_info.what_you_learn);
    setProgramTitle(allRepos.landing_info.program.title);
    setProgram(allRepos.landing_info.program.subtitles_list);
    setСv_position(allRepos.landing_info.cv_position);
    setСv_payment(allRepos.landing_info.cv_payment);
    setSkills(allRepos.landing_info.skills_list);
    setDiscount(allRepos.course_products[0].discount);
    setPrice(allRepos.course_products[0].price);
    setDuration(allRepos.course_products[0].duration);
    setListOfLessons(allRepos.videos);
    var i = 0;
    var buf = allRepos.videos;
    for (i = 0; i < buf.length; i++){
      buf[i]["id"] = i;
    }
  }); }
}, [saved_course_id]);


  function AddLandForm() {

    function handleSubmit(event) {
      event.preventDefault();
      setSubmit(true);
    }

    return (

      <form className="new-course-form" onSubmit={handleSubmit}>
        <label htmlFor="" className="new-course-label">Название курса</label>
        <input type="text" className="new-course-input inp-sz-2" value={name} onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="" className="new-course-label">Описание курса</label>
        <textarea className="new-course-input inp-sz-2 new-course-input-desc" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <label htmlFor="" className="new-course-label">Цена</label>
        <input type="text" className="new-course-input inp-sz-2" value={price} onChange={(e) => setPrice(e.target.value)}/>

        <div className="new-course-block">
          <label htmlFor="" className="new-course-label">Скидка</label>
          <select type="text" className="new-course-input inp-sz-1" value={discount} onChange={(e) => setDiscount(e.target.value)}>
          {
              discountList.map(card => {
              return <option>{card}</option>
            })
          }
          </select>
        </div>

        <div className="new-course-block">
          <label htmlFor="" className="new-course-label">Срок скидки</label>
          <input type="text" className="new-course-input inp-sz-1" value={duration} onChange={(e) => setDuration(e.target.value)}/>
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
            {
                durationList.map(card => {
                return <option>{card}</option>
              })
            }
          </select>
        </div>

        <label htmlFor="" className="new-course-label">Преподаватели (пользователь / e-mail)</label>
        <select type="text" className="new-course-input inp-sz-2">
        { props.users.filter((val)=> {
          if ((val.role === "TEACHER")) {
            return val
          }
          }).map(card => {
          return <option>{card.name} / {card.email}</option>
        })}
        </select>
      </form>
    );

  };

  return (
    <span className="root-span">
    <div className="admin-courses">
      <p className="text-reg-1 h-stats">Курсы ({courses.length})</p>
      <button className="add_course-button text-reg-2" onClick={() => {setModalActive(true); setSaved_course_id(0);}}><img src={addAdmin} alt="" style={{marginRight: "13px"}}/>Добавить курс</button>

      {
        courses.map(card => {
          return <CardCourse card={card} key={card.id} active={modalActive} setActive={setModalActive} setEdit_course_flag={setEdit_course_flag} setSaved_course_id={setSaved_course_id} setReload_course={setReload_course}/>
        })
      }

    </div>
    <Modal active={modalActive} setActive={setModalActive}>
      <div className="new-course">
        <h2 className="h2-sb new-course-h2">Новый курс</h2>
        <a className="a-div-close" href="#" onClick={() => {ClearFields(); setModalActive(false); setSaved_course_id(0);}}>
          <div className="div-close">
            <svg className="close" xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.254" viewBox="0 0 14.142 14.254">
              <g id="Сгруппировать_3184" data-name="Сгруппировать 3184" transform="translate(-361.929 -23.984)">
                <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1"/>
                <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1"/>
              </g>
            </svg>
          </div>
        </a>
        {AddLandForm()}
        <div className="add-video-div">
          <p className="add-video-header">Видеоуроки ({listOfLessons.length})</p>
          <div className="add-video">

            {
              listOfLessons.map(card => {
                return (
                  <div>
                    <div className="current_course-card" onClick={() => {
                       GetLesson(card.id);
                       setEdit_lesson_flag(card.id);
                       setModalLessonActive(true)
                     }}>
                      <div className="current_course-card-img">
                        <img src={video_blue} alt="" className=""/>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          <div className={saved_course_id ? "dnone" : "current_course-card"} onClick={() => {setModalLessonActive(true);}}>
            <div className="current_course-card-img" style={{
                backgroundColor: "#2979FF",
                padding: "25px 27.5px 21px 27.5px"
              }}>
              <img src={plus_white} alt="" className=""/>
            </div>
          </div>


          </div>

        </div>

        <Modal active={modalLessonActive} setActive={setModalLessonActive}>
          <div className="add-lesson-div__shadow">
          <div className="add-lesson-div">

            <svg onClick={() => {setModalLessonActive(false); CloseLesson();}} className="close-add-lesson-div" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g id="Сгруппировать_1671" data-name="Сгруппировать 1671" transform="translate(-312 -216)">
                <circle id="Эллипс_394" data-name="Эллипс 394" cx="16" cy="16" r="16" transform="translate(312 216)" fill="#f7f7f7"/>
                <g id="Сгруппировать_3357" data-name="Сгруппировать 3357" transform="translate(-40.5 200.944)">
                  <line id="Линия_3" data-name="Линия 3" x2="19" transform="translate(362.282 37.885) rotate(-45)" fill="none" stroke="#212121" strokeWidth="1"/>
                  <line id="Линия_4" data-name="Линия 4" x2="19" transform="translate(362.282 24.337) rotate(45)" fill="none" stroke="#212121" strokeWidth="1"/>
                </g></g></svg>
            <h2 className="h2-add-lesson-div">Добавить видеоурок</h2>

            <div className="add-lesson-description">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">URL видеозаписи урока</p>
                <textarea className="homework-textarea" value={lessonUrl} onChange={(e) => setLessonUrl(e.target.value) }></textarea>
              </label>
            </div>

            <div className="add-lesson-homework">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">Домашнее задание</p>
                <textarea className="homework-textarea" value={homework} onChange={(e) => setHomework(e.target.value) }></textarea>
              </label>
              <div className="homework-img"></div>
            </div>

            <div className="add-lesson-description">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">Описание урока</p>
                <textarea className="homework-textarea" value={lessonDescription} onChange={(e) => setLessonDescription(e.target.value) }></textarea>
              </label>
            </div>

            <div className="add-lesson-description">
              <label className="homework-check ">
                <input type="checkbox" className="homework-check__input"/>
                <span className="check__box"></span>
                <p className="homework-p">Вопросы и ответы</p>
                <textarea className="homework-textarea" value={qA} onChange={(e) => setQA(e.target.value)}></textarea>
              </label>
            </div>

            <div className="save-lesson">
              <button className="save-landing-button" onClick={() => {if (edit_lesson_flag !== -1) {SaveLesson(edit_lesson_flag);} else {SubmitLesson();} setModalLessonActive(false);  }}>Сохранить</button>
            </div>

          </div>
          </div>
        </Modal>

          <div className="format-lending-course">
            <p className="format-lending-header">Форматировать Landing курса</p>
            <div className="lending">
              <button className="lending-button text-reg-2" onClick={() => setModalLandingActive(true)}>Lending курса</button>
            </div>
          </div>
          <button className="save-new-course" onClick={() => {
            var i = 0;
            for (i = 0; i < listOfLessons.length; i++) {
              delete(listOfLessons[i]["id"]);
            }
            if (saved_course_id) {
              setEdit_course_flag(true);
            }
            else {
              setSaveNewCourseFlag(true);
            }
          setModalActive(false);
          }}>Сохранить курс</button>

          <Modal active={modalLandingActive} setActive={setModalLandingActive}>
            <div className="modalLanding">
              <div className="body-landing-unregister">
                <span className="modalLanding-close" onClick={() => setModalLandingActive(false)}></span>


                <div className="business-analyst">

                  <div className="edit-landing-img">
                    <img className="business-analyst-img" src={imgCourse} alt="graphics"/>
                    <button className="edit-landing-img-button">Загрузить фото</button>
                  </div>

                  <div className="business-analyst-right">
                    <div className="business-analyst-right-top">
                      <label className="edit-landing-label">Название курса</label>
                      <input className="edit-landing-input" value={title} onChange={(e) => setTitle(e.target.value)}/>
                      <label className="edit-landing-label">Имя Фамилия преподавателя</label>
                      <input className="edit-landing-input" value={name_of_teacher} onChange={(e) => setName_of_teacher(e.target.value)}/>
                      <label className="edit-landing-label">Текст - мотивация курса</label>
                      <input className="edit-landing-input" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                    </div>

                  </div>
                </div>

                <div className="business-footer h-57">
                  <div className="business-footer-item duration">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Длительность</h2>
                      <input className="edit-landing-input" value={durationLand} onChange={(e) => setDurationLand(e.target.value)}/>
                    </div>
                  </div>
                  <div className="business-footer-item online">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Онлайн</h2>
                      <input className="edit-landing-input" value={online} onChange={(e) => setOnline(e.target.value)}/>
                    </div>
                  </div>
                  <div className="business-footer-item studying">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Обучение</h2>
                      <input className="edit-landing-input" value={education} onChange={(e) => setEducation(e.target.value)}/>
                    </div>
                  </div>
                  <div className="business-footer-item effective">
                    <div className="blue-sircle"></div>
                    <div className="h-55">
                      <h2 className="h3-sb">Эффективность</h2>
                      <input className="edit-landing-input" value={efficiency} onChange={(e) => setEfficiency(e.target.value)}/>
                    </div>
                  </div>
                </div>

                <div className="specialist-market">
                  <div className="specialist-market-item specialist-h">
                    <p className="text-big">На рынке требуются<br/>
                      специалисты</p>
                  </div>
                  <div className="specialist-market-item specialist-block">
                    <input className="edit-landing-input " value={count_company} onChange={(e) => setCount_company(e.target.value)}/>
                    <h2 className="h2-sb h2-edit-company">компаний</h2>
                    <p className="text-reg-2"><input className="edit-landing-input" value={subtitle_company} onChange={(e) => setSubtitle_company(e.target.value)}/></p>
                  </div>
                  <div className="specialist-market-item specialist-block">
                    <input className="edit-landing-input " value={count_rubles} onChange={(e) => setCount_rubles(e.target.value)}/>
                    <h2 className="h2-sb h2-edit-company">рублей</h2>
                    <p className="text-reg-2"><input className="edit-landing-input" value={subtitle_rubles} onChange={(e) => setSubtitle_rubles(e.target.value)}/></p>
                  </div>
                </div>

                <div className="audience">
                  <h2 className="h1-sb audience-text">Кому подойдет данный курс</h2>
                  <div className="audience-course">
                    <div className="audience-course-item">
                      <img src="img/chill@2x.png" alt="chill" className="img-chill img-audience"/>
                      <input className="edit-landing-input" value={course_for0title} onChange={(e) => setCourseFor0Title(e.target.value)}/>
                      <input className="edit-landing-input" value={course_for0subtitle} onChange={(e) => setCourseFor0Subtitle(e.target.value)}/>
                    </div>
                    <div className="audience-course-item">
                      <img src="img/robot@2x.png" alt="robot" className="img-robot img-audience"/>
                      <input className="edit-landing-input" value={course_for1title} onChange={(e) => setCourseFor1Title(e.target.value)}/>
                      <input className="edit-landing-input" value={course_for1subtitle} onChange={(e) => setCourseFor1Subtitle(e.target.value)}/>
                    </div>
                    <div className="audience-course-item">
                      <img src="img/robot@2x.png" alt="robot" className="img-robot img-audience"/>
                      <input className="edit-landing-input" value={course_for2title} onChange={(e) => setCourseFor2Title(e.target.value)}/>
                      <input className="edit-landing-input" value={course_for2subtitle} onChange={(e) => setCourseFor2Subtitle(e.target.value)}/>
                    </div>

                  </div>
                </div>

                <div className="border-reg"></div>

                <div className="results-main">
                  <h2 className="h1-sb results-h1">Чему вы научитесь</h2>
                  <div className="results">
                <div className="results-item edit-results-item">
                  <textarea className="edit-landing-textarea" value={what_you_learn[0].text} onChange={(e) =>  {setWhat_you_learn([{text: e.target.value}, what_you_learn[1], what_you_learn[2]])}}/>
                </div>

                <div className="results-item edit-results-item">
                  <textarea className="edit-landing-textarea" value={what_you_learn[1].text} onChange={(e) =>  {setWhat_you_learn([what_you_learn[0], {text: e.target.value}, what_you_learn[2]])}}/>
                </div>

                <div className="results-item edit-results-item">
                  <textarea className="edit-landing-textarea" value={what_you_learn[2].text} onChange={(e) =>  {setWhat_you_learn([what_you_learn[0], what_you_learn[1], {text: e.target.value}])}}/>
                </div>
                    <div className="results-item edit-results-item add-result-item"/* onClick={() => {SubmitWhatYouLearn()}}*/>
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
                  <textarea className="edit-landing-textarea" value={programTitle} onChange={(e) => setProgramTitle(e.target.value)}/>

                  <div className="program-list">
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">1</p>
                      <textarea className="edit-landing-textarea" value={program[0].text} onChange={(e) =>  {setProgram([{text: e.target.value}, program[1], program[2], program[3], program[4], program[5]])}}/>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">2</p>
                      <textarea className="edit-landing-textarea" value={program[1].text} onChange={(e) =>  {setProgram([program[0], {text: e.target.value}, program[2], program[3], program[4], program[5]])}}/>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">3</p>
                      <textarea className="edit-landing-textarea" value={program[2].text} onChange={(e) =>  {setProgram([program[0], program[1], {text: e.target.value}, program[3], program[4], program[5]])}}/>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">4</p>
                      <textarea className="edit-landing-textarea" value={program[3].text} onChange={(e) =>  {setProgram([program[0], program[1], program[2], {text: e.target.value}, program[4], program[5]])}}/>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">5</p>
                      <textarea className="edit-landing-textarea" value={program[4].text} onChange={(e) =>  {setProgram([program[0], program[1], program[2], program[3], {text: e.target.value}, program[5]])}}/>
                    </div>
                    <div className="program-list-item program-list-item-edit">
                      <p className="numerate-list text-reg-1">6</p>
                      <textarea className="edit-landing-textarea" value={program[5].text} onChange={(e) =>  {setProgram([program[0], program[1], program[2], program[3], program[4], {text: e.target.value}])}}/>
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
                        <input className="edit-landing-input" value="Бизнес аналитик" value={cv_position} onChange={(e) => setСv_position(e.target.value)}/>
                      </div>
                    </div>
                    <div className="resume-business-analyst-right">
                      <p className="resume-p">Зарплата от:</p>
                      <input className="edit-landing-input" value="90 000р" value={cv_payment} onChange={(e) => setСv_payment(e.target.value)}/>
                    </div>
                  </div>
                  <div className="resume-skills">
                    <h2 className="resume-skills-h2 h3-sb">Профессиональные навыки:</h2>
                    <div className="resume-skills-list">
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[0].text} onChange={(e) =>  {setSkills([{text: e.target.value}, skills[1], skills[2], skills[3], skills[4], skills[5], skills[6], skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[1].text} onChange={(e) =>  {setSkills([skills[0], {text: e.target.value}, skills[2], skills[3], skills[4], skills[5], skills[6], skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[2].text} onChange={(e) =>  {setSkills([skills[0], skills[1], {text: e.target.value}, skills[3], skills[4], skills[5], skills[6], skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[3].text} onChange={(e) =>  {setSkills([skills[0], skills[1], skills[2], {text: e.target.value}, skills[4], skills[5], skills[6], skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[4].text} onChange={(e) =>  {setSkills([skills[0], skills[1], skills[2], skills[3], {text: e.target.value}, skills[5], skills[6], skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[5].text} onChange={(e) =>  {setSkills([skills[0], skills[1], skills[2], skills[3], skills[4], {text: e.target.value}, skills[6], skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[6].text} onChange={(e) =>  {setSkills([skills[0], skills[1], skills[2], skills[3], skills[4], skills[5], {text: e.target.value}, skills[7]])}}/>
                      </div>
                      <div className="resume-skills-list-item">
                        <div className="sircle-2"></div>
                        <textarea className="edit-landing-textarea" value={skills[7].text} onChange={(e) =>  {setSkills([skills[0], skills[1], skills[2], skills[3], skills[4], skills[5], skills[6], {text: e.target.value}])}}/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cell-course">
                  <div className="price">
                    <h3 className="price-h1">Стоимость курса</h3>
                    <div className="price-right">
                      <h3 className="price-percent h1-sb">-{discount}%</h3>
                      <p className="text-reg-2 price-data">{duration}</p>
                    </div>
                    <h3 className="price-new h1-sb">{parseInt(price) / 100 * (100 - discount)} руб.</h3>
                    <h3 className="price-old h2-sb">{price} руб.</h3>
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
