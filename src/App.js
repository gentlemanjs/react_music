import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import Playlist1 from './components/pages/Playlist1';
import Playlist2 from './components/pages/Playlist2';
import Playlist3 from './components/pages/Playlist3';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/Playlist1" exact component={Playlist1} />
      <Route path="/Playlist2" exact component={Playlist2} />
      <Route path="/Playlist3" exact component={Playlist3} />
    </Router>
  );
}

export default App;
