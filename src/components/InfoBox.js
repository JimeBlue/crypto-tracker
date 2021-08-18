import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

const InfoBox = ({ name, openInterest }) => {
  return (
    <Card className="profit__card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{openInterest} </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default InfoBox;

/*  open_interest_btc,
  trade_volume_24h_btc,
  image,
  year_established,
  description,
  url




<Card.Title>{name}</Card.Title>
        <Card.Img src={image} />
        <Card.Text>open_interest {open_interest_btc}</Card.Text>
        <Card.Text>trade_volume {trade_volume_24h_btc}</Card.Text>
        <Card.Text>year_established {year_established}</Card.Text>
        <Card.Text>description {description}</Card.Text>
        <Card.Link href={url}>{url}</Card.Link>*/
