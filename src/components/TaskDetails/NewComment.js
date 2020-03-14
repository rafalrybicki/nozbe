import React, { useState } from 'react';
import './NewComment.css'
import CommentTypePicker from './CommentTypePicker'
import Icon from '@material-ui/core/Icon';

function NewComment(props) {
  const [type, setType] = useState(false)
  const selectType = (type) => {
    setType(type)
    if (type) {
      document.querySelector('.task-details-attributes').classList.add('hide')
    } else {
      document.querySelector('.task-details-attributes').classList.remove('hide')
    }
  }
  return (
    <div className="new-comment">
      
      {type && <CommentTypePicker setType={(type) => selectType(type)} type={type} />}
      {type === false && 
        <React.Fragment>
          <textarea
            onClick={() => selectType('Text')}
            placeholder="Add comment (ENTER)"
          />
          <Icon
            className="type-icon"
            onClick={() => selectType('Attachment')}
          >attach_file</Icon>
          <Icon
            className="type-icon"
           onClick={() => selectType('Checklist')}
          >format_list_bulleted</Icon>
        </React.Fragment>
      }
    </div>
  );
}

export default NewComment;