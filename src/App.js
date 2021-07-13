import React, { Fragment, useEffect, useState } from "react";
// import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import SideMenu from "./components/sideMenu/SideMenu";

import Project from "./components/Project";

import TopBar from "./components/TopBar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

// Hook

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  const [showNav, setShowNav] = useState("show");

  useEffect(() => {
    let windowMeasure = window.innerWidth > 1200 ? "show" : "hide";
    setShowNav(windowMeasure);

    // Handler to call on window resize

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
      // console.log(windowSize.width);
      if (window.innerWidth > 1200) {
        setShowNav("show");
        // setShowToggler("hide");
      } else {
        setShowNav("hide");
      }
    }

    // Add event listener

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size

    handleResize();

    // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  // console.log(windowSize);
  return { width: windowSize.width, showNav: showNav };
}

// function useSetShowNav() {
//   const [showNav, setShowNav] = useState("show");

//   useEffect(() => {
//     // Handler to call on window resize

//     function handleResize() {

//       if (window.innerWidth > 1200) {
//         setShowNav("show");
//         // setShowToggler("hide");
//       } else {
//         setShowNav("hide");
//       }

//       let windowMeasure = window.innerWidth < 1200 ? "show" : "hide";
//       setShowNav(windowMeasure);
//     }

//     // Add event listener

//     window.addEventListener("resize", handleResize);

//     // Call handler right away so state gets updated with initial window size

//     handleResize();

//     // Remove event listener on cleanup

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
// }

function App() {
  let size = useWindowSize();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <Fragment>
        <TopBar />
        {/* <Navbar width={size.width} showNav={size.showNav} toggler={"hide"} /> */}
        <SideMenu isCollapsed={isCollapsed} toggle={handleToggle} />
        <main className={isCollapsed ? "side-menu-collapsed" : ""}>
          <Route exact path="/portfolio/home" component={Landing} />

          <Switch>
            <Route path="/portfolio/about" component={About} />
            <Route path="/portfolio/resume" component={Resume} />
            <Route path="/portfolio/portfolio" component={Portfolio} />
            <Route path="/portfolio/contact" component={Contact} />

            <Route path="/portfolio/project/:projectId" component={Project} />
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;