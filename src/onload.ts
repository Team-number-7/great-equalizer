import featureToggle, { Features } from './featureToggle';

export default function onload(): void {
  const features: Features = {
    isUserName: true,
  };
  featureToggle(features);
}
