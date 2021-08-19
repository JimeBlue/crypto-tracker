import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <table class="flex-table">
        <tbody>
          <tr>
            <td>
              <img src={image} alt="crypto" className="coin__image" />
            </td>
            <td className="coin-name black">{name}</td>
            <td className="coin-symbol black">{symbol}</td>
            <td className="coin-price black"> ${price}</td>
            <td className="coin-volume black">${volume.toLocaleString()}</td>

            {priceChange < 0 ? (
              <td className="coin-percent red">{priceChange.toFixed(2)}%</td>
            ) : (
              <td className="coin-percent green">{priceChange.toFixed(2)}%</td>
            )}
            <td className="coin-mkt-capital white">
              {' '}
              Mkt Cap: ${marketcap.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Coin;

/*
 <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" className="coin__image" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
*/
