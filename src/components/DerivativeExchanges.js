import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import InfoBox from '../components/InfoBox';
import '../components/DerivativeExchange.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 200,
    '& .MuiOutlinedInput-input': {
      color: '#1b2935',
    },
  },
});

const DerivativeExchanges = () => {
  const classes = useStyles();
  const [exchanges, setExchanges] = useState([]);
  const [exchange, setExchange] = useState('Select Exchange');
  const [exchangeInfo, setExchangeInfo] = useState({});

  useEffect(() => {
    const getexchangesData = async () => {
      fetch(
        'https://api.coingecko.com/api/v3/derivatives/exchanges?order=name_asc'
      )
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

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/derivatives/exchanges/aax_futures')
      .then((response) => response.json())
      .then((data) => {
        setExchangeInfo(data);
      });
  }, []);

  const onExchangeChange = (event) => {
    const exchangeValue = event.target.value;

    const url =
      exchangeValue === 'Select Exchange'
        ? `https://api.coingecko.com/api/v3/derivatives/exchanges/aax_futures`
        : `https://api.coingecko.com/api/v3/derivatives/exchanges/${exchangeValue}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setExchange(exchangeValue);
        setExchangeInfo(data);
      });
  };

  return (
    <>
      <div className="exchange__dropdown">
        <h4 className="exchange__heading">Select Derivative Exchange</h4>
        <FormControl className="exchange__dropdown" className={classes.root}>
          <Select
            variant="outlined"
            onChange={onExchangeChange}
            value={exchange}
            className="exchange__select"
          >
            <MenuItem value="Select Exchange">Select Exchange</MenuItem>
            {exchanges.map((exchange) => (
              <MenuItem value={exchange.value}>{exchange.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="exchange__info-box">
        <InfoBox
          name={exchangeInfo.name}
          perpPairs={exchangeInfo.number_of_perpetual_pairs}
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
