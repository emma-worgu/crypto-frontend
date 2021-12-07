import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './statelessComponent/home';
import Register from './statefulComponent/register';
import Login from "./statefulComponent/login";
import DashComponent from "./statefulComponent/Dash";
import Online from './statelessComponent/online';
import Flutter from './statefulComponent/Flutterwave';

function App() {

  const[data, setData] = useState(false);

  const date = 1632257696224 + 2592000000 + 2592000000 + 2592000000;
  const now = Date.now();

  const onlineStatus = async () => {
    const url = 'https://crypto-backend1.herokuapp.com/api/user/online';
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    const res = await req.json();
    if (req.status === 200) {
      return setData(res.onlineStatus.online);
    }
  };

  useEffect(() => {
    onlineStatus();
  }, []);

  if (data === false /* && date < now */) {
    return (
      <Router>
        <Switch>
          <Route path = '/' exact component={Online} />
          <Route path = '/pay' exact component={Flutter} />
          <Route component={Online} />
        </Switch>
      </Router>
    );  
  } else {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dash' component={DashComponent} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    );
  };
}

export default App;
