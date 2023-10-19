import "./spinner.css";
import React from 'react';

const Spinner = () => {
    return (
        <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </section>
    );
};

export default Spinner;