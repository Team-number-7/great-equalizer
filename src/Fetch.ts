import { global } from './globals/global';

export default class Fetch {
  static async getTransactions(): Promise<any> {
    const result = await global.fetch('http://web-lb-247099307.us-east-1.elb.amazonaws.com/transactions', {
      method: 'GET',
    });
    const data = await result.json();
    return data;
  }
}
