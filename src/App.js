import React from 'react';
import Menu from './components/Menu'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Priority from './components/Priority'
import Inbox from './components/Inbox'
import Projects from './components/Projects'
import Categories from './components/Categories'
import Calendar from './components/Calendar'
import Templates from './components/Templates'
import Team from './components/Team'
import Search from './components/Search'
import Settings from './components/Settings'

function App() {
  return (
    <Router>
      <Menu />
      <div className="main">
        <Switch>
          <Route path="/priority" component={Priority} exact />
          <Route path="/inbox" component={Inbox} />
          <Route path="/projects" component={Projects} />
          <Route path="/categories" component={Categories} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/templates" component={Templates} />
          <Route path="/team" component={Team} />
          <Route path="/search" component={Search} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Priority} />
        </Switch>
      </div>
    </Router>  );
}

export default App;
