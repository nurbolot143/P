import {
  Contacts,
  Portfolio,
  Home,
  AboutMe,
  Skills,
  TopBar,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopBar />

      <div className="app__sections">
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
