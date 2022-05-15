import React from 'react';

function Header() {
  return (
    <header className="header">
      <span id="header__logo" className="header__logo">
        Username
      </span>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className="header__settings" type="button" />
    </header>
  );
}

export default Header;
