import { document } from './globals/document';

export default function featureToggle(features) {
  if (!features.isUserName) {
    const logo = document.getElementById('header__logo');
    logo?.setAttribute('style', 'visibility: hidden;');
  }
}
