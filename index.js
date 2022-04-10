const isUserName = true;
window.onload = function featureToggle() {
    if (!isUserName) {
        const logo = document.getElementById('header__logo');
        logo === null || logo === void 0 ? void 0 : logo.setAttribute('style', 'visibility: hidden;');
    }
};
//# sourceMappingURL=index.js.map