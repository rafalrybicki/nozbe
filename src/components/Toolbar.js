import React, { useCallback } from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Toolbar({title}) {
  const openMenu = useCallback(() => {
    document.querySelector('nav').classList.add('open')
  })
  return (
    <div className="toolbar">
      <Icon className="menu-icon" onClick={openMenu}>menu</Icon>
      <Icon className="sync-icon">sync</Icon>
      <p>{title[1].toUpperCase() + title.slice(2)}</p>
      <Icon className="info-icon">info_outlined</Icon>
    </div>
  );
}

export default Toolbar