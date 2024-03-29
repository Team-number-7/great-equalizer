import { global } from './globals/global';
import { Transaction } from './types/Transaction';

const BASE_URL = 'https://api.gequalizer.com';
const COLLECTION = 'transactions';
export const URL = `${BASE_URL}/${COLLECTION}`;

export default class Fetch {
  static async getTransactions(): Promise<any> {
    const result = await global.fetch(URL, {
      method: 'GET',
    });
    return result.json();
  }

  static async postTransaction(transaction: Transaction): Promise<any> {
    await global.fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });
  }
}
