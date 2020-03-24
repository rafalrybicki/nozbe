import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";



import Menu from './components/Menu/Menu'
import Tasks from './components/Tasks/Tasks'
import Projects from './components/Projects'
import Categories from './components/Categories'
import Calendar from './components/Calendar'
import Templates from './components/Templates'
import Team from './components/Team'
import Search from './components/Search'
import Settings from './components/Settings'

function App() {
  return (
    <Router >
      <Menu />
      <div className="main">
        <Switch>
          <Route path="/priority/:id?" component={Tasks} />
          <Route path="/inbox/:id?" component={Tasks} />
          <Route path="/projects" component={Projects} />  {/* /projects/:project */}
          <Route path="/categories" component={Categories} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/templates" component={Templates} />
          <Route path="/team" component={Team} />
          <Route path="/search" component={Search} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
      <div className="filter"/>
    </Router>  
  );
}

export default App;
