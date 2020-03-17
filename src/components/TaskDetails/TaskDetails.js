import React from 'react';
import './TaskDetails.css';
import Header from './Header/Header';
import Attributes from './Attributes';
import NewComment from './NewComment/NewComment';
import Comments from './Comments/Comments'
import Footer from './Footer';
import Navbar from './Navbar';

function TaskDetails({content, project, deadline, completion, categories, repeat, duration, comments, author, created_at }) {
  return (
    <div className="task-details">
      <Header content={content} />
      <div className="main">
        <Attributes
          project={project}
          deadline={deadline}
          categories={categories}
          repeat={repeat}
          duration={duration}
          completion={completion}
        />
        <NewComment />
        <Comments
          comments={comments}
        />
        <Footer
          author={author}
          date={created_at} 
        />
      </div>
      <Navbar />
    </div>
  );
}

export default TaskDetails;