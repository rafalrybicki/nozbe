import React, { useState } from 'react';
import './NewComment.css'
import Icon from '@material-ui/core/Icon';
import CommentTypePicker from './CommentTypePicker'
import TextareaAutosize from 'react-textarea-autosize';
import TextComment from './TextComment'


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
      {type === false && 
      <TextareaAutosize
        onClick={() => selectType('Text')}
        placeholder="Add comment (ENTER)"
      />}

      {type === 'Text' && <TextComment />}

      {type === false && 
      <>
        <Icon
          className="type-icon"
          onClick={() => selectType('Attachment')}
        >attach_file</Icon>
        <Icon
          className="type-icon"
          onClick={() => selectType('Checklist')}
        >format_list_bulleted</Icon>
      </>}
    </div>
  );
}

export default NewComment;