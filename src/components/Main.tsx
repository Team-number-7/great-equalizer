import React from 'react';
import { useStore } from 'effector-react';
import DatesDay from './DatesDay';
import TransactionForm from './TransactionForm';
import $store from '../model/store';

function Main() {
  const store = useStore($store);

  return (
    <main className="main">
      <TransactionForm />
      <ul className="dates">
        {store.map((currentValue) => (
          <DatesDay
            key={currentValue.date.toDateString()}
            date={currentValue.date.toDateString()}
            transactions={currentValue.transactions}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
