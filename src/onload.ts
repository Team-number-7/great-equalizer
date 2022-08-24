import featureToggle, { Features } from './featureToggle';
import loadData from './loadData';
import { onloadEvent } from './model/store';

export default async function onload(): Promise<void> {
  const features: Features = {
    isUserName: true,
  };
  featureToggle(features);
  const transactions = await loadData();
  onloadEvent(transactions);
}
