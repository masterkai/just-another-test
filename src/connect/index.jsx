import React from "react";
import { connect, createExampleStore } from "./connect";
import { Provider } from "react-redux";
import Block from "../_internal/Block";
import Page from "../_internal/Page";

const Counter = ({ count, increment, decrement }) => (
  <div>
    <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

const store = createExampleStore();
const ConnectedCounter = connect(store)(mapStateToProps, mapDispatchToProps)(
  Counter
);

export const StoreComponent = () => (
  <Provider store={store}>
    <h1>Redux Connect</h1>
    <p>
      我現在想利用 redux 實作一個簡單的 counter，但因為"某些原因"，我沒辦法使用
      react-redux 中的 connect，請幫我實作一個
    </p>
    <p>
      <code>請在 src/connect/connect.jsx.js 作答</code>
    </p>
    <Block>
      <ConnectedCounter />
    </Block>
  </Provider>
);

export default () => (
  <Page>
    <StoreComponent />
  </Page>
);
