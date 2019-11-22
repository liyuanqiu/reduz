import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider, useSelector, useDispatch, Action } from './createReduz';
import { NotInContextError } from '../src';

const wrapper = ({ children }: PropsWithChildren<{}>) => (
  <Provider>{children}</Provider>
);

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider>
        <h1>hello reduz</h1>
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('throws error when calling useSelector without wrapping of Provider', () => {
    const { result } = renderHook(() => useSelector(state => state.count));
    expect(result.error).toEqual(NotInContextError);
  });

  it('throws error when calling useDispatch without wrapping of Provider', () => {
    const { result } = renderHook(() => useDispatch());
    expect(result.error).toEqual(NotInContextError);
  });

  it('can correctly get value by useSelector', () => {
    const { result } = renderHook(() => useSelector(state => state.count), {
      wrapper,
    });
    expect(result.current).toBe(0);
  });

  it('can modify state by useDispatch', () => {
    const { result } = renderHook(
      () => ({
        count: useSelector(state => state.count),
        dispatch: useDispatch(),
      }),
      {
        wrapper,
      },
    );
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.dispatch({
        type: Action.INCREMENT,
      });
    });
    expect(result.current.count).toBe(1);
  });
});
