import React, { useCallback } from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Toolbar(props) {
  const openMenu = useCallback(() => {
    document.querySelector('nav').classList.add('open')
  })
  return (
    <div className="toolbar">
      <Icon className="menu-icon" onClick={openMenu}>menu</Icon>
      <Icon className="sync-icon">sync</Icon>
      <p>unknown title yet</p>
      <Icon className="info-icon">info_outlined</Icon>
    </div>
  );
}

export default Toolbar