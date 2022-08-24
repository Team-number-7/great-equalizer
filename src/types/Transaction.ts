import { AbstractTransaction } from './IAbstractTransaction';

export interface Transaction extends AbstractTransaction {
  date: Date;
}
