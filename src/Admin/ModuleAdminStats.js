import React, {useEffect, useState, Suspense} from 'react'
import ReactLoading from 'react-loading'
import axios from 'axios'

export default function ModuleAdminStats() {
  const [percent, setPercent] = useState(0);
  const [stats, setStats] = useState({
    "registered_students": 0,
    "pending_applications": 0,
    "studying": 0,
    "teachers": 0
  });

    useEffect(() => {
      const apiUrl = ' https://i-proffi.com/api/v1/statistics';
      axios.get(apiUrl).then((repos) => {
        setStats(repos.data);
      });
    }, []);
    if (stats.registered_students == 0) {
      setTimeout(function() {
        setPercent(100);
      }, 1000);
      return (
        <div className="progress-page">
          <ReactLoading type={'spin'} color={'#2979FF'} height={100} width={100} />
        </div>
      )
    }
    else
      return (
        <div className="admin-stats">
          <p className="text-reg-1 h-stats active">Статистика</p>
          <div className="admin-stats-div">
            <h2 className="h2-sb admin-stats-div-number">{stats.registered_students}</h2>
            <p className="admin-stats-div-p text-reg-2">Всего пользователей зарегистрированно</p>
          </div>

          <div className="admin-stats-div">
            <h2 className="h2-sb admin-stats-div-number">{stats.pending_applications}</h2>
            <p className="admin-stats-div-p text-reg-2">Проходят обучение в данный период</p>
          </div>

          <div className="admin-stats-div">
            <h2 className="h2-sb admin-stats-div-number">{stats.studying}</h2>
            <p className="admin-stats-div-p text-reg-2">В статусе заявки оставили свои контакты</p>
          </div>

          <div className="admin-stats-div">
            <h2 className="h2-sb admin-stats-div-number">{stats.teachers}</h2>
            <p className="admin-stats-div-p text-reg-2">Сейчас находятся в статусе учителя</p>
          </div>
        </div>
      );
  };
