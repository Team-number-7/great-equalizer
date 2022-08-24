import { AbstractTransaction } from './IAbstractTransaction';

export interface FetchedTransaction extends AbstractTransaction {
  date: string;
}
