import { createEvent, createStore } from 'effector';
import { Transaction } from '../types/Transaction';
import addTransactionReducer, { loadTransactions } from './reducers';

export const addTransaction = createEvent<Transaction>();
export const onloadEvent = createEvent<Array<Transaction>>();

const initialState = [];

const $store = createStore(initialState)
  .on(addTransaction, addTransactionReducer)
  .on(onloadEvent, loadTransactions);

// $store.watch((state) => {
//   console.log('store', state);
// });

export default $store;
