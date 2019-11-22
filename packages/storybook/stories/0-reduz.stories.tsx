import React from 'react';
import { Provider, useSelector, useDispatch, Action } from './createReduz';

export default {
  title: 'Reduz',
};

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  function increase() {
    dispatch({
      type: Action.INCREMENT,
    });
  }
  function decrease() {
    dispatch({
      type: Action.DECREMENT,
    });
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          cursor: 'pointer',
        }}
        onClick={decrease}
      >
        -
      </button>
      <div
        style={{
          width: 50,
          textAlign: 'center',
        }}
      >
        {count}
      </div>
      <button
        style={{
          cursor: 'pointer',
        }}
        onClick={increase}
      >
        +
      </button>
    </div>
  );
}

export const counter = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
};
