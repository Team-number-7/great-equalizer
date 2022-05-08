import { document } from './globals/document';
import addTransaction from './addTransaction';
import { Transaction } from './types/Transaction';

export default function addClick() {
  const transaction: Transaction = {
    date: new Date((<HTMLInputElement>document.getElementById('date')).value),
    name: (<HTMLInputElement>document.getElementById('name')).value,
    value: parseInt((<HTMLInputElement>document.getElementById('value')).value, 10),
  };
  addTransaction(transaction);
}
