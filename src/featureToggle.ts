import { document } from './globals/document';

export interface Features {
  isUserName: boolean;
}

export default function featureToggle(features: Features): void {
  if (!features.isUserName) {
    const logo = document.getElementById('header__logo');
    logo?.setAttribute('style', 'visibility: hidden;');
  }
}
