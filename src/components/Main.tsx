import React from 'react';

function Main() {
  return (
    <main className="main">
      <form className="form">
        <span className="form__input-group">
          <input id="date" className="form__input" type="date" placeholder="Date" />
          <input id="name" className="form__input" type="text" placeholder="Transaction Name" />
          <input id="value" className="form__input form__input_short" type="number" min="0" placeholder="Sum" />
        </span>
        <input id="add" className="form__input-submit" type="button" value="Add" />
      </form>
      <ul className="dates">
        <li id="transaction" className="dates__day">
          <div className="dates__date">27.12.2021</div>
          <ul className="dates__details">
            <li className="dates__transaction">
              <span className="dates__transaction-text">шестерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
            <li className="dates__transaction">
              <span className="dates__transaction-text">шестерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
            <li className="dates__transaction">
              <span className="dates__transaction-text">пятерочка</span>
              <span className="dates__transaction-number">588</span>
            </li>
          </ul>
        </li>
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
