import React, { useCallback } from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Search(props) {
  const openMenu = useCallback(() => {
    document.querySelector('.menu').classList.add('open')
  })
  return (
    <div className="toolbar">
      <Icon className="menu-icon" onClick={openMenu}>menu</Icon>
      <Icon className="sync-icon">sync</Icon>
      <p>unknown title yet</p>
      {<Icon>info_outlined</Icon>}
    </div>
  );
}

export default Search