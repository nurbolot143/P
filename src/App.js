import "./App.scss";
import Container from "./container/Container";
import {
  Contacts,
  TopBar,
  Portfolio,
  Intro,
  Works,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="app">
      <Container>
        <TopBar />
        <Contacts />
        <Portfolio />
        <Intro />
        <Works />
        <Testimonials />
      </Container>
    </div>
  );
}

export default App;
