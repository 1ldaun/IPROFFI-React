import React from 'react'

export default function RowActivePupils({card}) {
    return (
      <tr>
        <td>{card.date}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.phone}</td>
        <td>{card.course}</td>
        <td><div className="green-circle"></div>Учится</td>
      </tr>
    );
  };
