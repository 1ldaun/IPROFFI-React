import React from 'react';
import "./modal.css"

const Modal = ({active, setActive, children}) => {

  var modal = document.getElementById("modal");
  var modal_content = document.getElementById("modal__content");

  return (
    <div id="modal" className={active ? "modal active" : "modal"}>
      <div id="modal__content" className={active ? "modal__content active" : "modal__content"}  onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
