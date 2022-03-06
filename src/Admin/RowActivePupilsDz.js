import React from 'react'
import hw from "../img/dz.svg"

export default function RowActivePupilsDz({card}) {
    return (
      <tr>
        <td>{card.registration_date.slice(0,10)}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.course.title}</td>
        <td>
          <div className="hw-button">
            <img src={hw} alt="" className="hw-img"/>
          </div>
        </td>
      </tr>
    );
  };
