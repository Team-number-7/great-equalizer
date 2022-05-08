import { Transaction } from './addTransaction';
import { window } from './globals/window';

export default function storeTransaction(transaction: Transaction) {
  const counter = parseInt(window.localStorage.getItem('counter'), 10) + 1;
  window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
  window.localStorage.setItem('counter', `${counter}`);
}
