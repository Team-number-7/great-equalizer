import IDay from '../types/IDay';
import { Transaction } from '../types/Transaction';

export default function addTransactionReducer(state, newTransaction): Array<IDay> {
  const newState: Array<IDay> = [...state];
  let isSameDate = false;
  let sameDateIndex = 0;

  for (let i = 0; i < state.length; i += 1) {
    if (newTransaction.date.toDateString() === state[i].date.toDateString()) {
      isSameDate = true;
      sameDateIndex = i;
    }
  }

  if (isSameDate) {
    newState[sameDateIndex].transactions.push({
      name: newTransaction.name,
      value: newTransaction.value,
    });
  } else {
    newState.push({
      date: newTransaction.date,
      transactions: [
        {
          name: newTransaction.name,
          value: newTransaction.value,
        },
      ],
    });
  }
  return newState;
}

export function loadTransactions(
  state: Array<IDay>,
  transactions: Array<Transaction>,
): Array<IDay> {
  const newState: Array<IDay> = [];
  newState.push({
    date: transactions[0].date,
    transactions: [{
      name: transactions[0].name,
      value: transactions[0].value,
    }],
  });
  for (let i = 1; i < transactions.length; i += 1) {
    const sameDateItem = newState
      .find((el) => el.date.toDateString() === transactions[i].date.toDateString());
    if (sameDateItem) {
      sameDateItem.transactions.push({
        name: transactions[i].name,
        value: transactions[i].value,
      });
    } else {
      newState.push({
        date: transactions[i].date,
        transactions: [
          {
            name: transactions[i].name,
            value: transactions[i].value,
          },
        ],
      });
    }
  }
  return newState;
}
