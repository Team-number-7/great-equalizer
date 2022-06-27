import Storage from './Storage';

export default function loadData() {
  const transactions = Storage.readTransactions();
  console.log(transactions);
  return transactions;
}
