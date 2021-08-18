import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

const InfoBox = ({
  name,
  openInterest,
  tradeVolume24h,
  image,
  yearEstablished,
  description,
  url,
}) => {
  return (
    <Card className="profit__card">
      <Card.Body>
        <Card.Img src={image} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>Open Interest{openInterest}</Card.Text>
        <Card.Text> Trade Volume 24h{tradeVolume24h}</Card.Text>
        <Card.Text>Year Established {yearEstablished}</Card.Text>
        <Card.Text>Description {description}</Card.Text>
        <Card.Link href={url}>url</Card.Link>
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
