import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import './InfoBox.css';
import numeral from 'numeral';

const InfoBox = ({
  name,
  perpPairs,
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
          <h6 className="card__heading">
            Number of Perpetual Pairs: {perpPairs}
          </h6>
          <h6 className="card__heading">
            Trade Volume 24h: {numeral(tradeVolume24h).format('$0,0')}
          </h6>
          <Card.Link href={url}>{name}</Card.Link>
          <p className="card__description">{description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default InfoBox;
