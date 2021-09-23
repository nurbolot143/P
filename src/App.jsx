import {
  Portfolio,
  AboutMe,
  Skills,
  TopBar,
  Intro,
  Contact,
  Footer,
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
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
