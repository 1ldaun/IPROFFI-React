import React from 'react'
import CardTechcontent from './CardTechcontent'

export default function ModuleAdminTechcontent() {
  const techcontentCards = [
    {id:1, header:'Условия обслуживания', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'},
    {id:2, header:'Условия обслуживания', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'},
    {id:3, header:'Условия обслуживания', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'},
  ]
    return (
      <div className="admin-tech_content">
        <p className="text-reg-1 h-stats active">Технический контент</p>
        <div className="tech_content">
        { techcontentCards.map(card => {
          return <CardTechcontent card={card} key={card.id} />
        })}
        </div>
      </div>
    );
  };
