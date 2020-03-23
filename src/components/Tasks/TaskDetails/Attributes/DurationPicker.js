import React, { useState } from 'react';
import './DurationPicker.css';
import Icon from '@material-ui/core/Icon';

function DurationPicker({duration}) {
  const [picker, showPicker] = useState(false)

  const togglePicker = () => {
    showPicker(!picker)
  }

  const options = [
    { text: '5 min', value: 5 },
    { text: '10 min', value: 10 },
    { text: '15 min', value: 15 },
    { text: '20 min', value: 20 },
    { text: '30 min', value: 30 },
    { text: '45 min', value: 45 },
    { text: '1 h', value: 60 },
    { text: '1.5 h', value: 90 },
    { text: '2 h', value: 120 },
    { text: '2.5 h', value: 150 },
    { text: '3 h', value: 180 },
    { text: '4 h', value: 240 },
    { text: '5 h', value: 300 },
    { text: '6 h', value: 360 },
    { text: '7 h', value: 420 },
    { text: '8 h', value: 480 },
  ]

  //<picker>duration picker<>
  // <header>
  // <search>
  // {props.children}

  return (
    <>
      <div 
        className={duration ? 'picker-btn' : 'picker-btn unchecked'}
        onClick={togglePicker}
      >
        <Icon>schedule</Icon>
        <span>{duration ? duration : 'Time needed?'}</span>
      </div>
      <div className={picker ? "picker" : "picker hide"}>
        <p className="header">Choose time needed</p>
        <div className="search">
          <Icon>search</Icon>
          <input type="text" placeholder="Search" />

        </div>
        <div className="list">
          <div className="item">
            <Icon>block</Icon>
            <span>Time not set</span>
          </div>
            {options.map(item => 
              <div className="item">
                <Icon>schedule</Icon>
                <span>{item.text}</span>
              </div> 
            )}
          </div>
        <button>Cancel</button>
      </div>
    </>
  );
}

export default DurationPicker;