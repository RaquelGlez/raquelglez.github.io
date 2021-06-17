import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Work} from './components/Work'

function App() {
  return (
    <div className="">
      <h1>Portafolio</h1>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <h2>Sobre mí</h2>
          </Route> */}
          <Route exact path="/work">
            <h2>Proyectos</h2>
            <Work/>
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
