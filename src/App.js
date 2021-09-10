import "./App.scss";
import { Contacts, Portfolio, Home, AboutMe, Skills } from "./components";

function App() {
  return (
    <div className="app">
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
