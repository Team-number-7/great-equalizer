import featureToggle, { Features } from './featureToggle';
import loadData from './loadData';
import { onloadEvent } from './model/store';

export default function onload(): void {
  const features: Features = {
    isUserName: true,
  };
  featureToggle(features);
  const transactions = loadData();
  onloadEvent(transactions);
}
