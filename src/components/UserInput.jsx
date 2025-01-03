import React from 'react';

const UserInput = ({onChange, userInput}) => {
   
    return (
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <label htmlFor="initial-investment-amount">Initial Investment Amount</label>
                    <input type="number"
                        id="initial-investment-amount"
                        required
                        name='initialInvestmentAmount'
                        value={userInput.initialInvestmentAmount}
                        onChange={onChange} />
                </p>
                <p>
                    <label htmlFor="annual-investment-amount">Annual Investment Amount</label>
                    <input type="number"
                        id="annual-investment-amount"
                        required
                        name='annualInvestmentAmount'
                        value={userInput.annualInvestmentAmount}
                        onChange={onChange} />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label htmlFor="expected-return-investment-amount">Expected Return</label>
                    <input type="number"
                        id="expected-return-investment-amount"
                        required name='expectedReturn'
                        value={userInput.expectedReturn}
                        onChange={onChange} />
                </p>
                <p>
                    <label htmlFor="duration-investment-amount">Duration</label>
                    <input type="number"
                        id="duration-investment-amount"
                        required
                        name='duration'
                        value={userInput.duration}
                        onChange={onChange} />
                </p>
            </div>
        </section>
    );
};

export default UserInput;