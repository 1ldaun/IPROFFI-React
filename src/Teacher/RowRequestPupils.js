import React from 'react'

export default function RowRequestPupils({card}) {
    return (
      <tr>
        <td>{card.date}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.phone}</td>
        <td>{card.course}</td>
        <td><div className="yellow-circle"></div>Заявка</td>
      </tr>
    );
  };
