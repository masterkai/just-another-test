import React from "react";
/**
 * 實作 RreactRedux connect()
 * @param {*} mapStateToProps
 * @param {*} mapDispatchToProps
 */
import {createStore} from "redux";

export const createExampleStore = () =>
  createStore((state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  });

// export const connect = (store) => (mapStateToProps, mapDispatchToProps) => (
//   Component
// ) => {
//   // 請在這裡實作
//
//   return Component
// };

export const connect = (store) => (mapStateToProps, mapDispatchToProps) =>
  (Component) => {
    return class extends React.Component {
      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      handleChange() {
        this.forceUpdate()
      }
    }
  }
