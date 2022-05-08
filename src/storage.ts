import { Transaction } from './types/Transaction';
import { window } from './globals/window';

class Storage {
  static storeTransaction(transaction: Transaction) {
    const counterString: string = window.localStorage.getItem('counter');
    const counter: number = counterString ? parseInt(counterString, 10) + 1 : 0;
    window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
    window.localStorage.setItem('counter', `${counter}`);
  }

  static readTransactions(): Array<Transaction> {
    const counter: number = parseInt(window.localStorage.getItem('counter'), 10);
    const transactions: Array<Transaction> = [];
    for (let i: number = 0; i <= counter; i += 1) {
      const transaction = JSON.parse(window.localStorage.getItem(`${i}`));
      transaction.date = new Date(transaction.date);
      transactions.push(transaction);
    }
    return transactions;
  }
}

export default Storage;
