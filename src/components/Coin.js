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
            <td className="coin-name blue">{name}</td>
            <td className="coin-symbol black">{symbol}</td>
            <td className="coin-price black"> ${price.toLocaleString()}</td>
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
