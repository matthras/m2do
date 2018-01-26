// @flow
import React, { Component } from 'react';
import styles from './Home.css';

export default function Eisenhower(props) {
  return(
    <div>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Urgent</td>
            <td>Not Urgent</td>
          </tr>
          <tr>
            <td className={styles.eisenhowerVerticalTextTD}><div className={styles.eisenhowerVerticalText}>Important</div></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className={styles.eisenhowerVerticalTextTD}><div className={styles.eisenhowerVerticalText}>Not<br />Important</div></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}