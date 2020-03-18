import React from 'react';
import './Header.css';
import Toggler from '../../shared/Toggler';
import Priority from '../../shared/Priority';
import EditForm from './EditForm';

function Header({content}) {
  const showEditForm = () => {
    document.querySelector('.header').classList.add('show-form')
  }
  
  return (
    <div className="header">
      <Toggler />
      <p onClick={showEditForm}>{content}</p>
      <Priority />
      <EditForm oldContent={content} />
    </div>
  );
}

export default Header;