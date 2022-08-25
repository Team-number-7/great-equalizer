import React, { useState } from 'react';
import { Transaction } from '../types/Transaction';
import { addTransaction } from '../model/store';
import Storage from '../Storage';

export default function TransactionForm() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);

  const handleChangeDate = (event) => {
    setDate(new Date(event.target.value));
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const transaction: Transaction = {
    date,
    name,
    value,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addTransaction(transaction);
    await Storage.storeTransaction(transaction);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="form__input-group">
        <input id="date" className="form__input" type="date" placeholder="Date" defaultValue={date.toLocaleDateString('en-CA')} onChange={handleChangeDate} />
        <input id="name" className="form__input" type="text" placeholder="Transaction Name" value={name} onChange={handleChangeName} />
        <input id="value" className="form__input form__input_short" type="number" min="0" placeholder="Sum" value={value} onChange={handleChangeValue} />
      </span>
      <input id="add" className="form__input-submit" type="submit" value="Add" />
    </form>
  );
}
