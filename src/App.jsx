import {
  Portfolio,
  AboutMe,
  Skills,
  TopBar,
  Intro,
  Contacts,
} from "./components";

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
        <Contacts />
      </div>
    </div>
  );
}

export default App;
