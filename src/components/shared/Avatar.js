import React from 'react';
import './Avatar.css'

function Avatar(props) {
  return (
    <span className="avatar">
      {props.userName[0] + props.userName.split(' ')[1][0]}
    </span>
  );
}

export default Avatar;