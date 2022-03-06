import React, {useEffect, useState, Suspense} from 'react'
import Modal from '../Main/Modal'
import del from "../img/delete.svg"
import close from "../img/close-alert.svg"
import del_gray from "../img/delete-gray.svg"
import axios from 'axios'

export default function RowAdmins({card, setReload}) {
  const [modalActive, setModalActive] = useState(false);
  const [dlt, setDlt] = useState(false);
   useEffect(() => {
     if (dlt) {
       setDlt(false);
       axios.patch(' https://i-proffi.com/api/v1/users/' + card.user_id, {
         "role": "STUDENT",
       }).then((repos) => {
      const allRepos = repos.data;
      setModalActive(false);
      setReload(true);
    }); }
  }, [dlt])

    return (
      <tr className="admin-tr">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="delete-ad">
          <img src={close} className="delete-ad-close" onClick={() => setModalActive(false)}/>
          <h3 className="h3-sb">Удаление администратора</h3>
          <p className="delete-ad-p">Вы уверены, что хотите удалить Администратора сайта?</p>
          <input type="submit" className="delete-ad-button" value="Удалить" onClick={() => setDlt(true)}/>
        </div>
      </Modal>
        <td>{card.registration_date.slice(0,10)}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.phone}</td>
        <td><img src={del_gray} alt="" className="delete-admin-inactive"/><img src={del} alt="" className="delete-admin" onClick={() => setModalActive(true)}/></td>
      </tr>
    );
  };
