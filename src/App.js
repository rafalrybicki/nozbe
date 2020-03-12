import React from 'react';
import Menu from './components/Menu'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Projects from './components/Projects'
import Categories from './components/Categories'
import Calendar from './components/Calendar'
import Templates from './components/Templates'
import Team from './components/Team'
import Search from './components/Search'
import Settings from './components/Settings'
import Tasks from './components/Tasks'

function App() {
  return (
    <Router >
      <Menu />
      <div className="main">
        {/* <div className="yield"> */}
          <Switch>
            <Route path="/priority" component={Tasks} />
            <Route path="/inbox" component={Tasks} />
            <Route path="/projects" component={Projects} />  {/* /projects/:project */}
            <Route path="/categories" component={Categories} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/templates" component={Templates} />
            <Route path="/team" component={Team} />
            <Route path="/search" component={Search} />
            <Route path="/settings" component={Settings} />
            <Redirect exact from="/" to="priority" />
          </Switch>
        </div>
      {/* </div> */}
    </Router>  
  );
}

export default App;
