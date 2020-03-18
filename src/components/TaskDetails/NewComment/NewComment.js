import React, { useState } from 'react';
import './NewComment.css'
import Icon from '@material-ui/core/Icon';
import CommentTypePicker from './CommentTypePicker'
import TextareaAutosize from 'react-textarea-autosize';
import TextComment from './TextComment'
import NewChecklist from './NewChecklist/NewChecklist';


function NewComment(props) {
  const [type, setType] = useState(false)
  const selectType = (type) => {
    setType(type)
    if (type) {
      document.querySelector('.task-details .main').classList.add('hide-attributes')
    } else {
      document.querySelector('.task-details .main').classList.remove('hide-attributes')    }
  }

  return (
    <div className="new-comment">
      {type === false && 
      <TextareaAutosize
        onClick={() => selectType('Text')}
        placeholder="Add comment (ENTER)"
      />}

      {type === 'Text' && <TextComment />}

      {type === 'Checklist' && <NewChecklist />}

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

      {type && 
      <>
        <Icon
          className="close"
          onClick={() => selectType(false)}
        >close</Icon>
        <CommentTypePicker type={type} />
      </>}
    </div>
  );
}

export default NewComment;