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

/*IMPORTS:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';
*/
/*BEFORE RETURN
const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

*/

/*IN RETURN:

<div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.total_volume}
            marketcap={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>


*/
