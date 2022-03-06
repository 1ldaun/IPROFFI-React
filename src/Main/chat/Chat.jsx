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

export default function Chat(props) {
  const [courseActive, setCourseActive] = useState(false);
  const [course2Active, setCourse2Active] = useState(false);
  const [chatList, setChatList] = useState(null);
  const [curChat, setCurChat] = useState(null);
  const [not, setNot] = useState(null);
  const [urlId, setUrlId] = useState(null);
  const [reloadChat, setReloadChat] = useState(false);
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
        console.log(urlId);
        setUrlId(id);
        const apiUrl = ' https://i-proffi.com/api/v1/chat/' + id;
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
      const apiUrl = ' https://i-proffi.com/api/v1/chat/' + urlId;
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setCurChat(allRepos);
        setReloadChatList(true);
      });
    }
  }, [reloadChat]);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/chat';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setChatList(allRepos);
      if (window.location.href.match(/\?chat_id=(.+)/)) {
        setChatOpened(true);
      }
    });
  }, []);

  useEffect(() => {
    const apiUrl = ' https://i-proffi.com/api/v1/chat/notifications';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setNot(allRepos);
    });
  }, []);

  useEffect(() => {
    if (reloadChatList) {
      setReloadChatList(false);
      const apiUrl = ' https://i-proffi.com/api/v1/chat';
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setChatList(allRepos);
      });
    }
  }, [reloadChatList]);

  if (!not || !chatList) {
    return (
      <div className="progress-page">
        <ReactLoading type={'spin'} color={'#2979FF'} height={100} width={100}/>
      </div>
    )
  }
  else
    return (
        <div className="chat">
          <h2 className={!chatOpened ? "h2-sb chat-h2 active" : "h2-sb chat-h2"}>Домашние задания</h2>
          <div className={chatOpened ? "current_chat-head active" : "current_chat-head"}>
            <NavLink to="/chat" className="back_arrow" onClick={() => setChatOpened(false)}>
              <img src={back_img} alt="" className="back_arrow-img"/>
            </NavLink>
            <h2 className="h2-sb current_course-h2">{chatHeader}</h2>
          </div>
          <ul className={!chatOpened ? "chat-list active" : "chat-list"}>

          <div className="chat-list-course">

          <ul className="chat-sub_list" style={{display:  !courseActive ? 'inline-block' : 'none' }}>

          <NavLink to={"?chat_id=" + "notification"} className="chat-link" onClick={() => {checkUrl("notification"); setChatOpened(true); setChatHeader("Уведомления");}}>
          <li className={("notification" == urlId) ? "chat-sub_list-li active1" : "chat-sub_list-li"}>
            <img src={srcNot} className="chat-sub_list-img" />
            <div className="chat-info">
            <p className="chat-sub_list-name">Уведомления</p>
            <p className="chat-sub_list-last">{(not[0]) ? new Date(not[0].message_date).toLocaleDateString() : ""} </p>
            </div>
          </li>
          </NavLink>

            {chatList.map((chat) => {
              return (
                <NavLink to={"?chat_id=" + chat.chat_id} className="chat-link" onClick={() => {checkUrl(chat.chat_id); setChatOpened(true); setChatHeader(chat.course.title);}}>
                <li className={(chat.chat_id == urlId) ? "chat-sub_list-li active1" : "chat-sub_list-li"}>
                {!chat.student_read && <div className="blue-dot"/>}
                  <img src={srcChat} className="chat-sub_list-img" />
                  <div className="chat-info">
                  <p className="chat-sub_list-name">{chat.course.title}</p>
                  <p className="chat-sub_list-last">{new Date(chat.last_message_date).toLocaleDateString()} </p>
                  </div>
                </li>
                </NavLink>
              )
            })}

          </ul>
          </div>

          </ul>
          <div className={chatOpened ? "dialog mobile-dialog_opened" : "dialog mobile-dialog_hidden"}>

            <ul className="messages">
            {("notification" == urlId) ?   <TaskBlock reChat={setReloadChat} id={"notification"} chat_lines={not}/> :
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
