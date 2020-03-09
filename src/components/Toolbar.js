import React from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Toolbar({title}) {
  const openMenu = () => {
    document.querySelector('nav').classList.add('open')
  }
  return (
    <div className="toolbar">
      <Icon className="menu-icon" onClick={openMenu}>menu</Icon>
      <Icon className="sync-icon">sync</Icon>
      <p>{title[0].toUpperCase() + title.slice(1)}</p>
      <Icon className="info-icon">info_outlined</Icon>
    </div>
  );
}

export default Toolbar