import React from 'react';
import './Header.css';
import Completion from '../shared/Completion';
import Priority from '../shared/Priority';

function Header({content}) {
  return (
    <div className="header">
      <Completion />
      <p>{content}</p>
      <Priority />
    </div>
  );
}

export default Header;