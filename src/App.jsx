import {
  Contacts,
  Portfolio,
  AboutMe,
  Skills,
  TopBar,
  Intro,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopBar />

      <div className="app__sections">
        <Intro />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
