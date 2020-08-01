import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Posts from './components/Posts';

import HorizontalNav from './layouts/navbar/navbar.js';
import About from './pages/about/about';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HorizontalNav />  
        <Switch>
          <div className="container-fluid">
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Posts />
            </Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
