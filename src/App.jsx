import { Portfolio, AboutMe, Skills, TopBar, Intro } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopBar />

      <div className="app__sections">
        <Intro />
        <Portfolio />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
