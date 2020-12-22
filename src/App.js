import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/"
            render={Home} />
          <Route exact path="/about"
            render={About} />
            <Route exact path="/calendar"
            render={Calendar} />
          {/*<Route
            exact path="/login"
            render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Redirect to="/home" />)} />
          <Route
            exact path="/register"
            render={props => !isAuthenticated ? (<Register {...props} setAuth={setAuth} />) : (<Redirect to="/home" />)} />
          <Route exact path="/home"
          render={props => isAuthenticated ? (<Home {...props} setAuth={setAuth} />) : (<Redirect to="/" />)} />*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
