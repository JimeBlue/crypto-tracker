import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profitability from './components/Profitability';
import DerivativeExchanges from './components/DerivativeExchanges';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Route exact path="/" component={Home}></Route>
        <Route path="/profitability" component={Profitability}></Route>
        <Route
          exact
          path="/DerivativeExchanges"
          component={DerivativeExchanges}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
