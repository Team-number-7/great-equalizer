/* eslint-disable react/no-array-index-key */
import React from 'react';
import DatesTransaction, { IDatesTransactionProps } from './DatesTransaction';

interface IDatesDayProps {
  date: string;
  transactions: Array<IDatesTransactionProps>;
}

function DatesDay(props: IDatesDayProps) {
  const { date } = props;
  const { transactions } = props;

  return (
    <li id="transaction" className="dates__day">
      <div className="dates__date">{ date }</div>
      <ul className="dates__details">
        {transactions.map((currentValue, index) => (
          <DatesTransaction key={index} name={currentValue.name} value={currentValue.value} />
        ))}
      </ul>
    </li>
  );
}

export default DatesDay;
