import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="credit-card">
      <h4 className="company-name">Credit Card</h4>
      <img className="pus" src="https://t3.ftcdn.net/jpg/00/07/45/12/240_F_7451242_NhwCZtAmCyEoLHrDnnMlNSLMjhQaqEi4.jpg" />
      <h4 className="credit-number"> 12343 2164 5679 876</h4>

      <div className="date-valide">
        <h4>5236</h4>
        <h4 className="date2">date valide</h4>

        <h6>month/year
            <br />11/50</h6>
        <img className="master-icon" src="https://www.lowestrates.ca/sites/default/files/creditcardlogos.jpg" />

      </div>

      <h4 className="card-holder">FARAH BOUSSElmi</h4>

    </div>
  );
}

export default App;
