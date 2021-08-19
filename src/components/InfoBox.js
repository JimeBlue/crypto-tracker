import React, { useState, useEffect } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import './InfoBox.css';

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
      <Card.Header>
        <CardColumns className="d-flex d-flex ">
          <div className="card__image-container">
            <Card.Img src={image} />
          </div>
          <div className="card__title-container">
            <Card.Title className="flex-grow-1 mb-0">{name}</Card.Title>
            <Card.Text>{yearEstablished}</Card.Text>
          </div>
        </CardColumns>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <h6 className="card__heading">Open Interest: {openInterest}</h6>
          <h6 className="card__heading">Trade Volume 24h: {tradeVolume24h}</h6>
          <Card.Link href={url}>{name}</Card.Link>
          <p className="card__description">{description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default InfoBox;

/*  IN RETURN: {p}{l}-{2}-{sm}
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


*/
