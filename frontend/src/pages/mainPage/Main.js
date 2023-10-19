import React from 'react';
import './main.css';
import Greeting from '../../components/greeting_slide/Greeting';
import OpenDeals from '../../components/open_deals/OpenDeals';
const Main = () => {
    return (
        <div>
            <Greeting />
            <OpenDeals />
        </div>
    );
};

export default Main;