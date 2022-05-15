import { createEvent, createStore } from 'effector';
import { Transaction } from '../types/Transaction';
import addTransactionReducer from './reducers';

export const addTransaction = createEvent<Transaction>();

const initialState = [
  {
    date: new Date('11.01.22'),
    transactions: [
      {
        name: 'Pyat',
        value: 567,
      },
    ],
  },
];

const $store = createStore(initialState)
  .on(addTransaction, addTransactionReducer);

$store.watch((state) => {
  console.log('store', state);
});

export default $store;
