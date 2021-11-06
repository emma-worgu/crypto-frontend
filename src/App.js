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

function App() {
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
}

export default App;
