import React from 'react';
import { BrowserRouter as Route} from 'react-router-dom';

// Components
import Home from './components/pages/Home';

import './assets/main.scss';
import Header from './components/patials/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
