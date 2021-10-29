import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/fractaleditor_transparent.png';
import vsg from '../../assets/vsg_transparent.png';
import cinematic from '../../assets/fractalcinematic.mp4';

import Dialog from 'components/dialog';

import './App.css';

const Fractal = () => {
  return (
    <div>
      <video autoPlay muted loop className="bgVideo">
        <source src={cinematic} type="video/mp4" />
      </video>

      <Dialog type="error" id={0x01} />

      <div className="main">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Welcome to Fractal Editor</h1>

      <hr />

      <div className="main">
          <button type="button">
            Create New Level
          </button>
          <button type="button">
            Open Existing Level
          </button>
      </div>
      <div className="credits">
        <h2>Brought to you by</h2>
        <img width="100px" alt="vsg" src={vsg} />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Fractal} />
      </Switch>
    </Router>
  );
}
