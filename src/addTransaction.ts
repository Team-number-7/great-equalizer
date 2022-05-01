import { document } from './globals/document';

export interface Transaction {
  date: Date;
  name: string;
  value: number;
}

export default function addTransaction(transaction: Transaction): void {
  const transactionHTML = `<div class="dates__date">${transaction.date.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text">${transaction.name}</span><span class="dates__transaction-number">${transaction.value}</span></li></ul>`;
  const element = document.querySelector('#transaction');
  element.insertAdjacentHTML('afterbegin', transactionHTML);
}
