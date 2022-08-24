import { Transaction } from './types/Transaction';
import { window } from './globals/window';
import Fetch from './Fetch';
import { FetchedTransaction } from './types/IFetchedTransaction';

class Storage {
  static storeTransaction(transaction: Transaction) {
    const counterString: string = window.localStorage.getItem('counter');
    const counter: number = counterString ? parseInt(counterString, 10) + 1 : 0;
    window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
    window.localStorage.setItem('counter', `${counter}`);
  }

  static async readTransactions(): Promise<Array<Transaction>> {
    const fetchedTransactions: Array<FetchedTransaction> = await Fetch.getTransactions();

    const transactions: Array<Transaction> = fetchedTransactions.map((transaction) => ({
      date: new Date(transaction.date),
      name: transaction.name,
      value: transaction.value,
    }));
    return transactions;
  }
}

export default Storage;
