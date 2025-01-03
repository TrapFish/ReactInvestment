import React from 'react';
import InvestmentProfile from '../../public/investment-calculator-logo.png';
const Header = () => {
    return (
        <header id="header">
            <img src={InvestmentProfile} alt="Money Bag" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;