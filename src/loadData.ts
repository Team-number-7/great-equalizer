import Storage from './Storage';

export default function loadData() {
  return Storage.readTransactions();
}
