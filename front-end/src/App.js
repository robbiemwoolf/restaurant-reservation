import React from "react";
//import background from './images/fineDiningBadyAbbas.jpg'
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import './App.css'

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className='background'>
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
