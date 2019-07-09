import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

//This is the parent component
class App extends Component {
  render() {
    return (
      <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}

//Components are below

function Home() {
  return(
    <div>
      <h1>Welcome to React Firebase todos</h1>
    </div>
  )
}

function Dashboard() {
  return(
    <div>
      <h1>Welcome to React Firebase todos</h1>
    </div>
  )
}

function Login() {
  return(
    <div>
      <h1>Welcome to React Firebase todos</h1>
    </div>
  )
}

export default App;
