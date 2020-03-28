import React from 'react';
import './Comment.css'
import Avatar from '../../../../shared/Avatar';
import ChecklistComment from './ChecklistComment';
import CommentOptions from './CommentOptions';
import { deleteComment, createTask, createCommentsKey } from '../../../../../redux/actions';
import { connect } from 'react-redux';
import moment from 'moment';

function Comment({id, taskId, type, content, author, project, created_at, dispatch}) {
  let commentBody;
  if (type === 'text') {
    commentBody = content;
  } else if (type === 'checklist') {
    commentBody = <ChecklistComment content={content} />
  } else {
    //attachment
  }

  const addTask = () => {
    const id = Math.random();
    const date = new Date();
    const contentForTask = type === 'text' ? content : content[0].value;
    const contentForComment = type === 'text' ? content : 
      content.map(item => (
        { 
          value: item.value, 
          id: Math.random(), 
          completion: false
        }
      ))

    dispatch(createTask(id, contentForTask, 'inbox', date));
    dispatch(createCommentsKey(id, [
      {
        type,
        content: contentForComment,
        author: 'GuyWhoCreated TaskByComment',
        created_at: date,
        updated_at: date,
        id: Math.random()
      }
    ]))
  }

  return (
    <div className="comment">
      <div className="comment-header">
        <Avatar userName={author} />
        <span className="author">{author}</span>
        <span className="date">{moment(created_at).startOf('second').fromNow()}</span>
        <CommentOptions 
          createTask={addTask}
          deleteComment={() => dispatch(deleteComment(taskId, id))}
        />
      </div>
      <div className="comment-body">
        {commentBody}
      </div>
      
    </div>
  );
}

export default connect()(Comment);