import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


function App() {
  return (
    <div className="app__container vh-100">
      {/* <h1>Portafolio</h1> */}
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" >
            {/* <About /> */}
            {/* efeewwefwerwe */}
            <Home/>
          </Route>
          <Route exact path="/work">
            {/* <h2>Proyectos</h2> */}
            <Work />
          </Route>
          <Route exact path="/skills">
            <h2>Habilidades</h2>
          </Route>
          <Route exact path="/contact">
            <h2>Contacto</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
