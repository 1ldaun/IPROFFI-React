import React from 'react'
import srcChat from "../../img/chat-course.png"
import srcNot from "../../img/notification.svg"
import uploaded_file from "../../img/uploaded_file.svg"
import send from "../../img/send.svg"
import send_white from "../../img/send-white.svg"
import back_img from "../../img/back.png"
import pin from "../../img/pin.svg"
import close_pin from "../../img/close-pin.svg"
import AnswerForm from "./AnswerForm"
import Task from "./Task"
import TaskBlock from "./TaskBlock"
import {NavLink, Route, BrowserRouter} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading';

export default function Chat({userInfo}) {
  const [courseActive, setCourseActive] = useState(false);
  const [course2Active, setCourse2Active] = useState(false);
  const [chatList, setChatList] = useState(null);
  const [curChat, setCurChat] = useState(null);
  const [not, setNot] = useState(null);
  const [urlId, setUrlId] = useState(null);
  const [reloadChat, setReloadChat] = useState(false);
  const [reloadNotification, setReloadNotification] = useState(true);
  const [reloadChatList, setReloadChatList] = useState(false);
  const [chatOpened, setChatOpened] = useState(false);
  const [chatHeader, setChatHeader] = useState("Title");
  const [percent, setPercent] = useState(0);
  var count = 0;

  function checkUrl(id) {
    if (!id) {
      let url = window.location.href;
      let v_url = url.match(/\?chat_id=(.+)/);
      if (v_url)
        id = v_url[1]
      else
        id = chatList[0].chat_id;
    }
    if (id) {
        setUrlId(id);
        const apiUrl = ' https://i-proffi.com/api/v1/chat/teacher/' + id;
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setCurChat(allRepos);
        });
    }
    else setReloadChat();
  }

  useEffect(function(){
    if (urlId && reloadChat) {
      setReloadChat(false);
      const apiUrl = ' https://i-proffi.com/api/v1/chat/teacher/' + urlId;
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setReloadChatList(true);
        setCurChat(allRepos);
      });
    }
  }, [reloadChat]);

  useEffect(() => {
      if (reloadNotification) {
        setReloadNotification(false);
        const apiUrl = ' https://i-proffi.com/api/v1/chat/notifications';
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setNot(allRepos);
        });
    }
  }, [reloadNotification]);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/chat/teacher';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setChatList(allRepos);
      if (window.location.href.match(/\?chat_id=(.+)/)) {
        setChatOpened(true);
      }
    });
  }, []);

  useEffect(() => {
    if (reloadChatList) {
      setReloadChatList(false);
      const apiUrl = ' https://i-proffi.com/api/v1/chat/teacher';
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setChatList(allRepos);
      });
    }
  }, [reloadChatList]);


  if (!chatList || !not) {
    return (
      <div className="progress-page">
        <ReactLoading type={'spin'} color={'#2979FF'} height={100} width={100} />
      </div>
    )
  }
  else
    return (
        <div className="chat">

        <h2 className={!chatOpened ? "h2-sb chat-h2 active" : "h2-sb chat-h2"}>Домашние задания</h2>
        <div className={chatOpened ? "current_chat-head active" : "current_chat-head"}>
          <NavLink to="/teacher/chat" className="back_arrow" onClick={() => setChatOpened(false)}>
            <img src={back_img} alt="" className="back_arrow-img"/>
          </NavLink>
          <h2 className="h2-sb current_course-h2">{chatHeader}</h2>
        </div>
          <ul className={chatOpened ? "chat-list teacher-mobile-chat" : "chat-list teacher-mobile-chat active"}>

          <NavLink to={"?chat_id=" + "notification"} className="chat-link" onClick={() => {checkUrl("notification"); setChatOpened(true); setChatHeader("Уведомления");}}>
          <li className={("notification" == urlId) ? "chat-sub_list-li active1" : "chat-sub_list-li"}>
            <img src={srcNot} className="chat-sub_list-img" />
            <div className="chat-info">
            <p className="chat-sub_list-name">Уведомления</p>
            <p className="chat-sub_list-last">{(not[0]) ? new Date(not[0].message_date).toLocaleDateString() : ""} </p>
            </div>
          </li>
          </NavLink>

          {chatList.map((card) => {
            return (
              <div className="chat-list-course active">
              {(card.chats.filter((item) => (!item.teacher_read)).length != 0) && <div className="blue-dot"/>}
              <details>
                <summary >
                  <div className="chat-course-info">
                    <img src={srcChat} className="chat-sub_list-img" />
                    <div className="chat-info">
                      <p className="chat-sub_list-name">{card.course.title}</p>
                      <p className="chat-sub_list-last">{new Date(card.chats[card.chats.length - 1].last_message_date).toLocaleDateString()}</p>
                      <p className="chat-sub_list-pupils">{card.chats.length} учеников</p>
                      <svg className="chat-open-course" id="Сгруппировать_4093" data-name="Сгруппировать 4093" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
                        <g id="rectangle" transform="translate(45) rotate(90)" fill="#ebebea" stroke="#ebebea" stroke-width="1" opacity="0">
                          <rect width="45" height="45" rx="6" stroke="none"/>
                          <rect x="0.5" y="0.5" width="44" height="44" rx="5.5" fill="none"/>
                        </g>
                        <rect id="rectangle-2" data-name="rectangle" width="45" height="45" rx="6" transform="translate(45) rotate(90)" fill="none"/>
                        <rect id="Прямоугольник_907" data-name="Прямоугольник 907" width="45" height="45" rx="5" transform="translate(45) rotate(90)" fill="none" opacity="0"/>
                        <path id="Контур_2163" data-name="Контур 2163" d="M9.882,9.879.919,18.842a.538.538,0,1,1-.761-.761L8.739,9.5.158.92a.536.536,0,0,1,0-.761A.541.541,0,0,1,.537,0,.525.525,0,0,1,.915.159L9.878,9.122A.535.535,0,0,1,9.882,9.879Z" transform="translate(13.242 27.037) rotate(-90)" fill="#212121"/>
                      </svg>
                    </div>
                  </div>
                </summary>

                <ul className="chat-sub_list">

                {card.chats.map((item) => {
                  return (
                  <NavLink to={"?chat_id=" + item.chat_id} className="chat-link" onClick={() => {checkUrl(item.chat_id); setReloadChatList(true); setChatOpened(true); setChatHeader(card.course.title);}}>
                    <li className={(item.chat_id == urlId) ? "chat-sub_list-li active2" : "chat-sub_list-li"}>
                      {!item.teacher_read && <div className="blue-dot"/>}
                      <img src="../img/profile2x.png" className="chat-sub_list-img" />
                      <div className="chat-info">
                      <p className="chat-sub_list-name">{item.student.name} {item.student.last_name}</p>
                      <p className="chat-sub_list-last">{new Date(item.last_message_date).toLocaleDateString()}</p>
                      </div>
                    </li>
                  </NavLink>
                )
                })
                }
                </ul>

              </details>
              </div>
            )
          })}

          </ul>

          <div className={chatOpened ? "dialog mobile-dialog_opened" : "dialog mobile-dialog_hidden"}>
            <ul className="messages">
            {("notification" == urlId) ?   <TaskBlock reChat={setReloadNotification} id={"notification"} status={userInfo.role} chat_lines={not}/> :
            (curChat) ? curChat.map((chat) => {
              count++;
               return <TaskBlock count={count} reChat={setReloadChat} id={chat.chat_thread_id} chat_lines={chat.chat_lines} status={chat.hw_status}/>
              })
              : ""
          }
            </ul>
          </div>

          </div>
    );
  };

  /*              <li className="message-right">
                  <div className="message-info">
                  <p className="message-pupil">Вы (преподаватель):</p>
                  <p className="message-pupil-name">Елена Мишлен</p>
                  <p className="message-time">12:34</p>
                  </div>
                  <div className="message-file">
                    <img src={uploaded_file}/>
                    <div className="file-info-right">
                      <p className="file-name">Filename.pdf</p>
                      <a href="#" className="file-a">Скачать файл</a>
                    </div>
                  </div>
                </li> */

                /*            {chatList.map((chat) => {
                              return (
                                <NavLink to={"?chat_id=" + chat.chat_id} className="chat-link" onClick={() => checkUrl()}>
                                <li className="chat-sub_list-li">
                                  <img src={srcChat} className="chat-sub_list-img" />
                                  <div className="chat-info">
                                  <p className="chat-sub_list-name">{chat.course.title}</p>
                                  <p className="chat-sub_list-last">{chat.last_message_date} </p>
                                  </div>
                                </li>
                                </NavLink>
                              )
                            })}*/
