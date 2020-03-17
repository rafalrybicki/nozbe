import React from 'react';
import './Footer.css';
import Avatar from '../shared/Avatar';
import moment from 'moment';

function Footer({author, date}) {
  return (
    <div className="task-details-footer">
      <Avatar userName={author} />
      <span>
        Created by <strong>{author}</strong>
        <br />
        {moment(date).format("MMM Do YY LT")}
      </span>
    </div>
  );
}

export default Footer;