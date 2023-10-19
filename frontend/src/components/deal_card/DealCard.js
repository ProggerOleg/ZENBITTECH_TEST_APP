import React from 'react';
import './card.css';

const DealCard = ({ title, image, price, tiket, yields, days, lastUpdated }) => {
    return (
        <div className="card bg-dark text-white">
            <img src={image} className="card-img" alt={title} />
            <div className="card-image-overlay">
                <div className="left-part">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price} Dhs</p>
                    <p className="card-text">Tiket - {tiket} DHS</p>
                </div>
                <div className="center-part">
                    <p className="card-text">Yield {yields}%</p>
                    <p className="card-text">Days left {days}</p>
                </div>
                <div className="right-part">
                    <p className="card-text">Last updated {lastUpdated}</p>
                </div>
            </div>
        </div>
    );
};

export default DealCard;
