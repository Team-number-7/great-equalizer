import addButtonEventListener from './addButtonEventListener';
import featureToggle, { Features } from './featureToggle';
import loadData from './loadData';

export default function onload(): void {
  const features: Features = {
    isUserName: true,
  };
  featureToggle(features);
  addButtonEventListener();
  loadData();
}
