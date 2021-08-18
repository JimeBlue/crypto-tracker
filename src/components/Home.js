import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../components/Coin';
import './Coin.css';
import './Home.css';

const Home = () => {
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

  return (
    <div className="home">
      <div className="coin-search-container">
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
      </div>
      <table class="flex-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>Volume</th>
            <th>Price Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
      </table>
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
  );
};
export default Home;
