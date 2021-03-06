import React from 'react';

// App Components
import Store from 'App/App.store';
import Container from 'App/App.styles';
import Controller from 'App/App.controller';
import Pages from 'pages/index';

const App = () => {
  return (
    <Container>
      <Controller />
      <Pages />
    </Container>
  );
};

export default () => (
  <React.StrictMode>
    <Store.Provider>
      <App />
    </Store.Provider>
  </React.StrictMode>
);
