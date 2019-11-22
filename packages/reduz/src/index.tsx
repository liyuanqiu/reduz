import React, {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  PropsWithChildren,
} from 'react';

export const NotInContextError = new Error('Can not find context.');

export interface BaseActionType<Action> {
  type: Action;
}

export type ActionType<
  Action,
  Payload extends {} = {
    [key: string]: unknown;
  }
> = BaseActionType<Action> & Payload;

export type Reducer<State, Action> = (
  state: State,
  action: ActionType<Action>,
) => State;

export type Selector<State, T> = (state: State) => T;

export function createReduz<State, Action>(
  reducer: Reducer<State, Action>,
  initialState: State,
) {
  const StateContext = createContext<State | null>(null);
  const DispatchContext = createContext<Dispatch<ActionType<Action>> | null>(
    null,
  );

  function Provider({ children }: PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  }

  function useSelector<T>(selector: Selector<State, T>) {
    const state = useContext(StateContext);
    if (state === null) {
      throw NotInContextError;
    }
    return selector(state);
  }

  function useDispatch() {
    const dispatch = useContext(DispatchContext);
    if (dispatch === null) {
      throw NotInContextError;
    }
    return dispatch;
  }

  return {
    StateContext,
    DispatchContext,
    Provider,
    useSelector,
    useDispatch,
  };
}
