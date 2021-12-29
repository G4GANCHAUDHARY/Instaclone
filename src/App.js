// import {BrowserRouter, Route , Routes} from 'react-router-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Postview from './components/Postview/Postview';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path='/' component={LandingPage } exact/>
          <Route path='/Postview' component={Postview } exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
