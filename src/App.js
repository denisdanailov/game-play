
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Catalog from './components/Catalog';
import Details from './components/Details';
import { useEffect, useState } from 'react';
import { getUser } from './api/data.js';


function App() {
 
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/create"  component={Create}/>
        <Route path="/register"  component={Register}/>
        <Route path="/catalog"  component={Catalog}/>
        <Route path="/details/:gameId"  component={Details}/>

        </Switch>
      </main>

    </div>
  );
}

export default App;
