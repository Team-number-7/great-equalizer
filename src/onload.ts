import loadData from './loadData';
import { onloadEvent } from './model/store';

export default async function onload(): Promise<void> {
  const transactions = await loadData();
  onloadEvent(transactions);
}
