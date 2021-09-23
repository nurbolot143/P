import {
  Portfolio,
  AboutMe,
  Skills,
  TopBar,
  Intro,
  Contact,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopBar />

      <div className="app__sections">
        <Intro />
        <Portfolio className="portfolio" />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
