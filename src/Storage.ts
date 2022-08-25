import { Transaction } from './types/Transaction';
import Fetch from './Fetch';
import { FetchedTransaction } from './types/IFetchedTransaction';

class Storage {
  static async storeTransaction(transaction: Transaction) {
    await Fetch.postTransaction(transaction);
  }

  static async readTransactions(): Promise<Array<Transaction>> {
    const fetchedTransactions: Array<FetchedTransaction> = await Fetch.getTransactions();

    return fetchedTransactions.map((transaction) => ({
      date: new Date(transaction.date),
      name: transaction.name,
      value: transaction.value,
    }));
  }
}

export default Storage;
