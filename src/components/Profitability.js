import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
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
        /*setProfit(res.data);*/
        const profitData = res.data;
        setBarData({
          labels: profitData.map((crypto) => crypto.name),
          datasets: [
            {
              label: 'Market Capitalization in USD',
              data: profitData.map((crypto) => crypto.market_cap),
              backgroundColor: [
                '#ffbb11',
                '#ecf0f1',
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

        setLineData({
          labels: profitData.map((crypto) => crypto.name),
          datasets: [
            {
              label: 'Price Change Percentage in 24h',
              data: profitData.map(
                (crypto) => crypto.price_change_percentage_24h
              ),
              backgroundColor: [
                '#ffbb11',
                '#ecf0f1',
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
    <Card className="profit__card">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>

        <Bar
          className="profit__bar"
          data={barData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Cryptocurrency Market Capital',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
            },
          }}
        />

        <Card.Title>Card Title</Card.Title>

        <Line
          className="profit__line"
          data={lineData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Cryptocurrency Price Change Percentage in 24h',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
            },
          }}
        />
      </Card.Body>
    </Card>
  );
};
export default Profitability;
