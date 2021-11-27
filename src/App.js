import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './pages/Details/Details';

function App() {
  return (
    <div className="">
      <header className="App-header">
       
      <Router>
      <Switch>
        <Route
          path="/" 
          exact
          component={Home}
        />
        <Route
          path="/details"
          exact
          component={Details}
        />
        
      </Switch>
    </Router>
      </header>
    </div>
  );
}

export default App;
