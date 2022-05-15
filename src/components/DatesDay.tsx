/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import DatesTransaction from './DatesTransaction';

interface IDatesDayProps {
  date: string;
  name: string;
  value: number;
}

function DatesDay(props: IDatesDayProps) {
  const { date } = props;
  const { name } = props;
  const { value } = props;
  const [transactions, setTransactions] = useState([{ name, value }]);

  return (
    <li id="transaction" className="dates__day">
      <div className="dates__date">{ date }</div>
      <ul className="dates__details">
        {transactions.map((currentValue, index) => (
          <DatesTransaction key={index} name={currentValue.name} value={currentValue.value} />
        ))}
      </ul>
      <button type="button" onClick={() => setTransactions([...transactions, { name: 'Perekrestok', value: 763 }])}>
        Add Transaction
      </button>
    </li>
  );
}

export default DatesDay;
