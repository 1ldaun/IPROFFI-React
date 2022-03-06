import React from 'react'

export default function RowApplication({card}) {
    return (
      <tr>
        <td>{card.application_date.slice(0, 10)}</td>
        <td>{card.name}</td>
        <td>{card.email}</td>
        <td>{card.phone}</td>
        <td>{card.course.title}</td>
      </tr>
    );
  };
