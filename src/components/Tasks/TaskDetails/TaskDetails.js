import React from 'react';
import './TaskDetails.css';
import Header from './Header/Header';
import Attributes from './Attributes/Attributes';
import NewComment from './NewComment/NewComment';
import Comments from './Comments/Comments'
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

function TaskDetails({
  index,
  id,
  content, 
  project, 
  deadline, 
  priority, 
  completion, 
  categories, 
  repeat, 
  duration, 
  comments, 
  author, 
  created_at,
  changeTask,
  lastTask
}) {
  return (
    <div className={typeof index === "number" ? "task-details show" : "task-details"}>
      {typeof index === "number" && 
      <>
        <Header 
          content={content} 
          id={id}
          priority={priority} 
          completion={completion}
        />
        <div className="main">
          <Attributes
            project={project}
            deadline={deadline}
            categories={categories}
            repeat={repeat}
            duration={duration}
            completion={completion}
          />
          <NewComment taskId={id} />
          {/* <Comments
            comments={comments}
          /> */}
          <Footer
            author={author}
            date={created_at} 
          />
        </div>
        <Navbar 
          id={id}
          index={index} 
          changeTask={changeTask} 
          lastTask={lastTask} 
        />
      </>}
    </div>
  );
}

export default TaskDetails;