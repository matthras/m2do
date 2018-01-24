// @flow
import React, { Component } from 'react';

export default function TaskList(props) {
  const List = props.list.map( (item, index) => {
    return(
      <tr key={index}>
        <td>{item.description}</td>
        <td>{item.date}</td>
        <td>{item.priority}</td>
      </tr>
    )
  })
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
          </tr>                
        </thead>
        <tbody>
        {List}
        </tbody>
      </table>
    </div>
  )
}
  