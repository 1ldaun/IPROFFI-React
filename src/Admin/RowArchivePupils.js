import React from 'react'

export default function RowArchivePupils({card}) {
    return (
      <tr>
        <td>{card.registration_date.slice(0,10)}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.phone}</td>
        <td><div className="gray-circle"></div>Не учится</td>
      </tr>
    );
  };
