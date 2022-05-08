import { Transaction } from './types/Transaction';
import { window } from './globals/window';

class Storage {
  static storeTransaction(transaction: Transaction) {
    const counterString: string = window.localStorage.getItem('counter');
    const counter: number = counterString ? parseInt(counterString, 10) + 1 : 0;
    window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
    window.localStorage.setItem('counter', `${counter}`);
  }
}

export default Storage;
