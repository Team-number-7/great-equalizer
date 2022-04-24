import featureToggle from './featureToggle';

export default function onload() {
  const features = {
    isUserName: false,
  };
  featureToggle(features);
}
