import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import './Profitability.css';

const Profitability = () => {
  const [barData, setBarData] = useState({});
  const [lineData, setLineData] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then((res) => {
        const profitData = res.data;
        setBarData({
          labels: profitData.map((crypto) => crypto.name),
          datasets: [
            {
              label: 'Market Capitalization in USD',
              data: profitData.map((crypto) => crypto.market_cap),
              backgroundColor: [
                '#2074ef',
                '#ff3a47',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0',
                '#ff3a47',
                '#ecf0f1',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0',
              ],
            },
          ],
        });

        setLineData({
          labels: profitData.map((crypto) => crypto.name),
          datasets: [
            {
              label: 'Price Change Percentage 24h',
              data: profitData.map(
                (crypto) => crypto.price_change_percentage_24h
              ),
              backgroundColor: [
                '#ff3a47',
                '#2a71d0',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0',
                '#ffbb11',
                '#ecf0f1',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0',
              ],
            },
          ],
        });
      })

      .catch((error) => alert(error));
  }, []);

  return (
    <div className="charts">
      <h3 className="charts__heading">Top 10 Cryptocurrency Profitability</h3>
      <div>
        <Line data={lineData} className="line-chart" />
      </div>
      <div className="bar-chart__contianer">
        <Bar data={barData} className="bar-chart" />
      </div>
    </div>
  );
};
export default Profitability;
