import React from 'react';

// App Components
import Container from 'App/App.styles';
import Controller from 'App/App.controller';
import Store from 'App/App.store';

const App = () => {
  const store = Store.useContainer();

  return (
    <div className='App'>
      <Controller />
      <Container />
      <p>{store.counter}</p>
      <button onClick={() => store.increment()}>increment</button>
      <button onClick={() => store.decrement()}>decrement</button>
    </div>
  );
};

export default App;
