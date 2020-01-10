import React from 'react';
import './App.css';
import Hei from './components/Hei'
import Kello from './components/Kello';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Sivu2 from './pages/Sivu2';

function App() {
  return (
    <Router>
      <Route path="/" exact>
      <Hei name="Leevi" />
      <Kello date={new Date()}/>
      </Route>
      <Route path="/">
          <h1>Moi kaikki</h1>
      </Route>
      <Route path="/sivu2">
          <Sivu2/>
      </Route>
    </Router>
  );
}
setInterval(App, 1000);
export default App;
