/// <reference types="react" />
interface State {
    count: number;
}
export declare enum Action {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}
export declare const StateContext: import("react").Context<State | null>, DispatchContext: import("react").Context<import("react").Dispatch<import("reduz").ActionType<Action, {
    [key: string]: unknown;
}>> | null>, Provider: ({ children }: {
    children?: import("react").ReactNode;
}) => JSX.Element, useSelector: <T>(selector: import("reduz").Selector<State, T>) => T, useDispatch: () => import("react").Dispatch<import("reduz").ActionType<Action, {
    [key: string]: unknown;
}>>;
export {};
