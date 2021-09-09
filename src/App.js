import "./App.scss";
import {
  Contacts,
  Portfolio,
  Home,
  AboutMe,
  Skills,
  Header,
} from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
