import React, { useEffect } from 'react';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

import onload from '../src/onload';

function App() {
  useEffect(() => {
    onload();
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
