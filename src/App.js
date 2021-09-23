import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="app__container vh-100">
      {/* <h1>Portafolio</h1> */}
      <Router>
        {/*  <Header /> */}
        <Switch>
          <Route exact path="/">
            {/* <About /> */}
            {/* efeewwefwerwe */}
            <Home />
          </Route>
          <Route exact path="/proyects">
            {/* <h2>Proyectos</h2> */}
            <Work />
          </Route>
          <Route exact path="/about">
            {/* <h2>Sobre mí</h2> */}
            <About />
          </Route>
          <Route exact path="/contact">
            {/*  <h2>Contacto</h2> */}
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
