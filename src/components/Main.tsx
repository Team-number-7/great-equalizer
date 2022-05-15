import React from 'react';
import DatesDay from './DatesDay';
import TransactionForm from './TransactionForm';

function Main() {
  return (
    <main className="main">
      <TransactionForm />
      <ul className="dates">
        <DatesDay date="11.02.22" name="Pyaterochka" value={676} />
        <li className="dates__day">
          <div className="dates__date">26.12.2021</div>
          <ul className="dates__details">
            <li className="dates__transaction">
              <span className="dates__transaction-text">пятерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
            <li className="dates__transaction">
              <span className="dates__transaction-text">пятерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
          </ul>
        </li>
        <li className="dates__day">
          <div className="dates__date">25.12.2021</div>
          <ul className="dates__details">
            <li className="dates__transaction">
              <span className="dates__transaction-text">пятерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
            <li className="dates__transaction">
              <span className="dates__transaction-text">пятерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
            <li className="dates__transaction">
              <span className="dates__transaction-text">пятерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

export default Main;
