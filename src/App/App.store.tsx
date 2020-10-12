import produce from 'immer';
import { useState } from 'react';
import { createContainer } from 'unstated-next';

const Store = () => {
  const [state, setState] = useState({
    counter: 0,
  });

  const increment = () =>
    setState(
      produce(state, (draft) => {
        draft.counter++;
      })
    );

  const decrement = () =>
    setState(
      produce(state, (draft) => {
        draft.counter--;
      })
    );

  return {
    counter: state.counter,
    increment,
    decrement,
  };
};

export default createContainer(Store);
