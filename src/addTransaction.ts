import { document } from './globals/document';
import { Transaction } from './types/Transaction';

export default function addTransaction(transaction: Transaction): void {
  const transactionHTML = `<div class="dates__date" data-cy="date">${transaction.date.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text" data-cy="name">${transaction.name}</span><span class="dates__transaction-number" data-cy="value">${transaction.value}</span></li></ul>`;
  const element = document.querySelector('#transaction');
  element.insertAdjacentHTML('afterbegin', transactionHTML);
}
