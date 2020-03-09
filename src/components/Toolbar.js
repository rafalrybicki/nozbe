import React from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Toolbar({title, viewMode, selectAll, quantity, closeEditMode}) {
  const openMenu = () => {
    document.querySelector('nav').classList.add('open')
  }
  return (
    <div className="toolbar">
      {!viewMode && <div>
        <input 
          className="select-all" 
          type="checkbox" 
          onClick={selectAll} 
        />
        {quantity}
      </div>}
      {viewMode && <Icon className="menu-icon" onClick={openMenu}>menu</Icon>}
      {viewMode && <Icon className="sync-icon">sync</Icon>}

      <p>{title[0].toUpperCase() + title.slice(1)}</p>
      {viewMode && <Icon className="info-icon">info_outlined</Icon>}
      {!viewMode && <button className="close" onClick={closeEditMode}>Done</button>}
    </div>
  );
}

export default Toolbar