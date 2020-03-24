import React from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Toolbar({content, selectAll, quantity, closeEditMode}) {
  const openMenu = (e) => {
    document.querySelector('.filter').classList.add('active');
    document.querySelector('.menu').classList.add('open');
    document.body.addEventListener('click', closeMenu);
  }

  const closeMenu = (e) => {
    if (e.target.classList.contains('filter')) {
      e.target.classList.remove('active');
      document.querySelector('.menu').classList.remove('open');
      document.body.removeEventListener('click', closeMenu);
    }
  }

  return (
    <div className="toolbar">
 
        <input 
          className="select-all" 
          type="checkbox" 
          onClick={selectAll} 
        />
        <span>{quantity || 0}</span>

      <React.Fragment>
        <Icon className="menu-icon" onClick={openMenu}>menu</Icon>
        <Icon className="sync-icon">sync</Icon>
      </React.Fragment>
      <p>
        {content[0].toUpperCase() + content.slice(1)}
        <br />
        <span>Edit mode</span>
      </p>
       <Icon className="info-icon">info_outlined</Icon>
       <button className="btn-green" onClick={closeEditMode}>Done</button>
    </div>
  );
}

export default Toolbar