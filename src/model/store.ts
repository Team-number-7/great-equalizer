import { createEvent, createStore } from 'effector';
import { Transaction } from '../types/Transaction';
import addTransactionReducer from './reducers';

export const addTransaction = createEvent<Transaction>();

const initialState = [];

const $store = createStore(initialState)
  .on(addTransaction, addTransactionReducer);

// $store.watch((state) => {
//   console.log('store', state);
// });

export default $store;
