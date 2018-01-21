// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

// class TaskList extends Component {
//   render() {
//     const taskList = this.props.list.map( (item) => {
//       <span>{item.description}</span>
//     })
//     return(
//       <div id="taskList">
//         {taskList}
//       </div>
//     )
//   }
// }


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          description: 'Work on this stupid app',
          date: '26-12-1989',
          priority: 'High'
        },
        {
          description: 'Work on other stupid stuff',
          date: '17-01-2018',
          priority: 'Low'
        }
      ]
    };
  }
  render() {
    const TaskList = this.state.list.map( (item) => {
      return(
        <tr>
          <td>{item.description}</td>
          <td>{item.date}</td>
          <td>{item.priority}</td>
        </tr>
      )
    })
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>m2do List</h2>
          <div className={styles.taskList}>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Due Date</th>
                  <th>Priority</th>
                </tr>                
              </thead>
              {TaskList}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
