import { global } from './globals/global';
import { Transaction } from './types/Transaction';

const BASE_URL = 'http://web-lb-247099307.us-east-1.elb.amazonaws.com';
const COLLECTION = 'transactions';
export const URL = `${BASE_URL}/${COLLECTION}`;

export default class Fetch {
  static async getTransactions(): Promise<any> {
    const result = await global.fetch(URL, {
      method: 'GET',
    });
    const data = await result.json();
    return data;
  }

  static async postTransaction(transaction: Transaction): Promise<any> {
    await global.fetch(URL, {
      method: 'POST',
      body: JSON.stringify(transaction),
    });
  }
}
