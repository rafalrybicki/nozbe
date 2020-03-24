import React, { useState } from 'react';
import './RepeatPicker.css';
import Icon from '@material-ui/core/Icon';

function Repeat({ repeat }) {
  const [picker, showPicker] = useState(false)

  const togglePicker = () => {
    showPicker(!picker)
  }

  const options = [
    { text: 'Every Day', value: 'day' },
    { text: 'Every Week', value: 'week' },
    { text: 'Every Month', value: 'month' },
    { text: 'Every Year', value: 'year' },
    { text: 'Every Weekday', value: 'weekday' },
    { text: 'Every 2 Days', value: '2 days' },
    { text: 'Every 2 Weeks', value: '2 weeks' },
    { text: 'Every 3 Weeks', value: '3 weeks' },
    { text: 'Every 4 Weeks', value: '4 weeks' },
    { text: 'Every 2 Months', value: '2 months' },
    { text: 'Every 3 Months', value: '3 months' },
    { text: 'Every Half a Year', value: 'haf a year' },
    { text: 'Every 2 Years', value: '2 years' }
  ]

  //<picker>duration picker<>
  // <header>
  // <search>
  // {props.children}
  return (
    <>
      <div
        className={repeat ? 'picker-btn' : 'picker-btn unchecked'}
        onClick={togglePicker}
      >
        <Icon className="repeat">replay</Icon>
        <span>{repeat ? repeat : 'Repeat?'}</span>
      </div>
      <div className={picker ? "picker" : "picker hide"}>
        <p className="header">Choose recurrence</p>
        <div className="search">
          <Icon>search</Icon>
          <input type="text" placeholder="Search" />
        </div>

        <div className="list">
          <div className="item">
            <Icon>block</Icon>
            <span>Do not repeat</span>
          </div>
          {options.map((item,i)=>
            <div className="item" key={i}>
              <Icon className="repeat">replay</Icon>
              <span>{item.text}</span>
            </div>
          )}
          <div className="item">
            <Icon className="repeat">replay</Icon>
            <span>Every week on...</span>
            <Icon className="arrow">arrow_forward_ios</Icon>
          </div>
          <div className="item">
            <Icon className="repeat">replay</Icon>
            <span>Every...(e.g 2nd Tuesday) of the month</span>
            <Icon className="arrow">arrow_forward_ios</Icon>
          </div>
        </div>

        <button>Cancel</button>
      </div>
    </>
  );
}

export default Repeat;