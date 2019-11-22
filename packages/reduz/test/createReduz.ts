import { createReduz, Reducer } from '../src';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

export enum Action {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case Action.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Action.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const {
  StateContext,
  DispatchContext,
  Provider,
  useSelector,
  useDispatch,
} = createReduz<State, Action>(reducer, initialState);
