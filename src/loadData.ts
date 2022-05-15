import Storage from './storage';

export default function loadData() {
  const transactions = Storage.readTransactions();
  console.log(transactions);
}
