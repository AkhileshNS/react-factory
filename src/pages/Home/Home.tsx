import React from 'react';
import Container from './Home.styles';
import Store from 'App/App.store';
import { RouteComponentProps } from '@reach/router';

export interface IProps extends RouteComponentProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const Home: React.FC<IProps> = (props) => {
  return (
    <Container>
      <p>{props.counter}</p>
      <button onClick={() => props.increment()}>increment</button>
      <button onClick={() => props.decrement()}>decrement</button>
    </Container>
  );
};

export default (props: RouteComponentProps) => {
  const store = Store.useContainer();
  return (
    <Home
      counter={store.counter}
      increment={store.increment}
      decrement={store.decrement}
      {...props}
    />
  );
};
