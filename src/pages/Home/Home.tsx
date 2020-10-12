import React from 'react';
import Container from './Home.styles';
import Store from 'App/App.store';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {}

const Home: React.FC<IProps> = () => {
  const store = Store.useContainer();

  return (
    <Container>
      <p>{store.counter}</p>
      <button onClick={() => store.increment()}>increment</button>
      <button onClick={() => store.decrement()}>decrement</button>
    </Container>
  );
};

export default Home;
