import React, { Fragment, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import SideMenu from "./components/sideMenu/SideMenu";
import TopBar from "./components/TopBar";

import Project from "./components/Project";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Fragment>
        <TopBar />

        <SideMenu isCollapsed={isCollapsed} toggle={handleToggle} />
        <main className={isCollapsed ? "side-menu-collapsed" : ""}>
          <Route exact path="/" component={Home} />

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />

            <Route path="/project/:projectId" component={Project} />
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
