import React, {useEffect, useState} from 'react'
import Modal from '../Main/Modal'
import del from "../img/pen.svg"
import close from "../img/close-alert.svg"
import del_gray from "../img/pen-gray.svg"
import axios from 'axios'

export default function RowTeachers({card, courses, setAlert, setRel}) {
  const [modalActive, setModalActive] = useState(false);
  const [apply, setApply] = useState(false);
  const [activePass, setActivePass] = useState(false);
  const [coursesCopy, setCoursesCopy] = useState(courses);
  const [teacherCourses, setTeacherCourses] = useState([]);
  const [ls, setLs] = useState([]);
  const [ls2, setLs2] = useState([]);
  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/users/teachers/' + card.user_id;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setTeacherCourses(allRepos);
      var a = [];
      teacherCourses.courses.map(e => {
        a.push(e.course_id);
      });
      setLs(a);
      var b = [];
      courses.map(e => {
        b.push(e.course_id);
      });
      setLs2(b);
    });
}, [modalActive]);


  function ps(e){
    var a = ls;
    a.push(e);
    console.log(a);
    setLs(a);
    var b = [];
    courses.map(e => {
      b.push(e.course_id);
    });
    setLs2(b);
  }

  function dl(e){
    var a = ls;
    a.splice(a.indexOf(e),1);
    console.log(a);
    setLs(a);
    var b = [];
    courses.map(e => {
      b.push(e.course_id);
    });
    setLs2(b);
  }

  function sendList(){
    for (var i = 0; i < ls2.length; i++) {
      if (ls.indexOf(ls2[i]) != -1) {
        const apiUrl = 'https://i-proffi.com/api/v1/courses/full/' + ls2[i];
        var buf = ls2[i];
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          var teachers = allRepos.teacher_ids;
          teachers.push(parseInt(card.user_id));
          axios.patch(' https://i-proffi.com/api/v1/courses/' + buf, {
            "teacher_ids": teachers,
          }).then((repos) => {
            const allRepos = repos.data;
            setAlert(true);
          });
        });
    }
    else {
      const apiUrl = 'https://i-proffi.com/api/v1/courses/full/' + ls2[i];
      var buf = ls2[i];
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        var teachers = allRepos.teacher_ids;
        if (teachers.indexOf(parseInt(card.user_id)) != -1)
          teachers.splice(teachers.indexOf(parseInt(card.user_id)), 1);
          console.log(ls2[i]);
        axios.patch(' https://i-proffi.com/api/v1/courses/' + buf, {
          "teacher_ids": teachers,
        }).then((repos) => {
          const allRepos = repos.data;
          setAlert(true);
        });
      });
    }
  }
    setRel(true);
  }

    return (
      <tr className="admin-tr">
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="edit-teacher">
            <img src={close} className="delete-ad-close" onClick={() => setModalActive(false)}/>
            <div className="edit-teacher-left">
                <p className="p-teacher">В статусе учителя:</p>
                <h3 className="h3-sb h3-teacher">{card.name} {card.last_name}</h3>
                <p className="p-teacher-email">{card.email}</p>

                <p className="p-teacher-course">Привязанные курсы:</p>
                {courses.map(course => {
                  return (<label className="homework-check register-check">
                    <input type="checkbox" className="homework-check__input" checked={ls.includes(course.course_id)} value={ls.includes(course.course_id)} onChange={(e) => ls.includes(course.course_id) ? dl(course.course_id) : ps(course.course_id)}/>
                    <span className="check__box"></span>
                    {course.title}
                  </label>)
                })}
            </div>

            <div className="edit-teacher-right">
                <p className="p-teacher-right"><span className="span-teacher">{ls.length} курсов </span>привязано к {card.name} {card.last_name}, Вы можете добавить или удалить привязки к курсам</p>
                <input type="submit" className={(activePass) ? "edit-button disabled-edit-button" : "edit-button"} disabled={activePass} value="Сохранить изменения" onClick={() => sendList()}/>
            </div>
          </div>
        </Modal>
        <td>{card.registration_date.slice(0,10)}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.phone}</td>
        <td>{card.courses_count} курсов</td>
        <td><img src={del_gray} alt="" className="delete-admin-inactive"/><img src={del} alt="" className="delete-admin" onClick={() => setModalActive(true)}/></td>
      </tr>
    );
  };
