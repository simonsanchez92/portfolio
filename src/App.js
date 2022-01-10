import React, { Fragment, useState, useEffect } from "react";
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

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "es", name: "Español", country_code: "es" },
];

function App() {
  const { t } = useTranslation();
  const history = createBrowserHistory();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguage]);

  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Fragment>
        <TopBar />

        <SideMenu isCollapsed={isCollapsed} toggle={handleToggle} />
        <main className={isCollapsed ? "side-menu-collapsed" : ""}>
          <div class="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-globe"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    disabled={currentLanguageCode === code}
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                    ></span>{" "}
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
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
