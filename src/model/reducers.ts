import IDay from '../types/IDay';

export default function addTransaction(state, newTransaction): Array<IDay> {
  const newState: Array<IDay> = [...state];
  for (let i = 0; i < state.length; i += 1) {
    if (newTransaction.date === state[i].date) {
      newState[i].transactions.push({ name: newTransaction.name, value: newTransaction.value });
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
  }
  return newState;
}
