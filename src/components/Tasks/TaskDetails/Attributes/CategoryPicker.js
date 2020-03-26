import React from 'react';
import './CategoryPicker.css'
import Icon from '@material-ui/core/Icon';


function CategoryPicker({categories}) {
  if (categories.length > 0) {
    return (
      <div className="picker-btn category-picker">
        {categories.map(category => 
          <div key={Math.random()} className="category">
            <Icon>{category.icon}</Icon>
            <div>{category.name}</div>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="picker-btn unchecked">
        <Icon>flag</Icon>
        <div>Category?</div>
      </div>
    )
  }
}

export default CategoryPicker;