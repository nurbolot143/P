import "./App.scss";
import {
  Contacts,
  Portfolio,
  Home,
  AboutMe,
  Skills,
  TopBar,
} from "./components";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
