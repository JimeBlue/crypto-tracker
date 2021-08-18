import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import InfoBox from '../components/InfoBox';

const DerivativeExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [exchange, setExchange] = useState('Select Exchange');
  const [exchangeInfo, setExchangeInfo] = useState(
    {}
  ); /*for indivudual derivative exchange*/

  useEffect(() => {
    const getexchangesData = async () => {
      fetch(
        'https://api.coingecko.com/api/v3/derivatives/exchanges?order=name_asc'
      )
        .then((response) => response.json())
        .then((data) => {
          const exchanges = data.map((exchange) => ({
            name: exchange.name,
            id: exchange.id,
          }));

          setExchanges(exchanges);
        });
    };
    getexchangesData();
  }, []);

  const onExchangeChange = (event) => {
    const exchangeId = event.target.value;

    const url = `https://api.coingecko.com/api/v3/derivatives/exchanges/${exchangeId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setExchange(exchangeId);
        setExchangeInfo(data);
      });
  };

  return (
    <>
      <div className="exchange__dropdown">
        <h4>Search Derivative Exchange</h4>
        <FormControl className="exchange__dropdown">
          <Select
            variant="outlined"
            onChange={onExchangeChange}
            value={exchange}
          >
            <MenuItem value="Select Exchange">Select Exchange</MenuItem>
            {exchanges.map((exchange) => (
              <MenuItem value={exchange.id}>{exchange.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="exchange__info-box">
        <InfoBox
          name={exchangeInfo.name}
          openInterest={exchangeInfo.open_interest_btc}
          tradeVolume24h={exchangeInfo.trade_volume_24h_btc}
          image={exchangeInfo.image}
          yearEstablished={exchangeInfo.year_established}
          description={exchangeInfo.description}
          url={exchangeInfo.url}
        />
      </div>
    </>
  );
};
export default DerivativeExchanges;

/* BEFORE RETURN:
const [exchange, setExchange] = useState('Select exchange');
  const [exchangeInfo, setExchangeInfo] = useState({});
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/derivatives/exchanges')
      .then((response) => response.json())
      .then((data) => {
        setExchangeInfo(data);
      });
  }, []);

  useEffect(() => {
    const getexchangesData = async () => {
      fetch('https://api.coingecko.com/api/v3/derivatives/exchanges')
        .then((response) => response.json())
        .then((data) => {
          const exchanges = data.map((exchange) => ({
            name: exchange.name,
            value: exchange.id,
          }));

          setExchanges(exchanges);
        });
    };
    getexchangesData();
  }, []);

  const onExchangeChange = async (event) => {
    const exchangeId = event.target.value;

    const url = `https://api.coingecko.com/api/v3/derivatives/exchanges/${exchangeId}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setExchange(exchangeId);
        setExchangeInfo(data);
      });

*/

/* INSIDE RETURN:

<div className="exchange">
      <h4>Search Derivative Exchange</h4>
      <FormControl className="exchange__dropdown">
        <Select variant="outlined" onChange={onExchangeChange} value={exchange}>
          <MenuItem value="Select exchange">Select exchange</MenuItem>
          {exchanges.map((exchange) => (
            <MenuItem value={exchange.id}>{exchange.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
 */

/* ESTE VA ARRIBA DE exchanges.map EN RETURN:

    <MenuItem value="Select Exchange">Select Exchange</MenuItem>
    */
