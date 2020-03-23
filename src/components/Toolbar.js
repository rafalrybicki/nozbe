import React from 'react'
import Icon from '@material-ui/core/Icon';
import './Toolbar.css'

function Toolbar({title, mode, selectAll, quantity, closeEditMode}) {
  const openMenu = (e) => {
    console.log(e.target)

    document.querySelector('.filter').classList.add('active');
    document.querySelector('.menu').classList.add('open');
    document.body.addEventListener('click', closeMenu);
  }

  const closeMenu = (e) => {
    console.log(e.target)
    if (e.target.classList.contains('filter')) {
      e.target.classList.remove('active');
      document.querySelector('.menu').classList.remove('open');
      document.body.removeEventListener('click', closeMenu);
    }
  }

  return (
    <div className="toolbar">
      {mode === 'edit' && <div>
        <input 
          className="select-all" 
          type="checkbox" 
          onClick={selectAll} 
        />
        <span>{quantity}</span>
      </div>}
      {mode === 'view' && 
      <React.Fragment>
        <Icon className="menu-icon" onClick={openMenu}>menu</Icon>
        <Icon className="sync-icon">sync</Icon>
      </React.Fragment>}
      <p>
        {title[0].toUpperCase() + title.slice(1)}
        <br />
        {mode === 'edit' && <span>Edit mode</span>}
      </p>
      {mode === 'view' && <Icon className="info-icon">info_outlined</Icon>}
      {mode === 'edit' && <button className="btn-green" onClick={closeEditMode}>Done</button>}
    </div>
  );
}

export default Toolbar