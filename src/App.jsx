import { Portfolio, AboutMe, Skills, TopBar, Intro, Works } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopBar />

      <div className="app__sections">
        <Works />
        <Intro />
        <Portfolio />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
