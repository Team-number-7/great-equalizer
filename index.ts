import './normalize.css';
import './style.css';

const isUserName = false;

window.onload = function featureToggle() {
  if (!isUserName) {
    const logo = document.getElementById('header__logo');
    logo?.setAttribute('style', 'visibility: hidden;');
  }
};
