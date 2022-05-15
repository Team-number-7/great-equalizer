import ITransactionItem from './ITransactionItem';

interface IDay {
  date: Date;
  transactions: Array<ITransactionItem>;
}

export default IDay;
