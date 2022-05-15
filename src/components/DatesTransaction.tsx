import React from 'react';

export interface IDatesTransactionProps {
  name: string;
  value: number;
}

function DatesTransaction(props: IDatesTransactionProps) {
  const { name } = props;
  const { value } = props;

  return (
    <li className="dates__transaction">
      <span className="dates__transaction-text">{name}</span>
      <span className="dates__transaction-number">{value}</span>
    </li>
  );
}

export default DatesTransaction;
