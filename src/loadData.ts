import addTransaction from './addTransaction';
import Storage from './Storage';

export default function loadData() {
  const transactions = Storage.readTransactions();
  for (let i = 0; i <= transactions.length; i += 1) {
    addTransaction(transactions[i]);
  }
}
