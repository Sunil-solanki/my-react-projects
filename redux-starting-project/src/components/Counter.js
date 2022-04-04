import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";
import classes from "./Counter.module.css";
import { counterAction } from "../store/counter";

// -----------------------**--function based redux--**--------------------

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const increase = () => {
    dispatch(counterAction.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const clearcounterHandler = () => {
    dispatch(counterAction.clear());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increase}>Increment By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={clearcounterHandler}>Clear Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// ---------------classes based redux--------------------------

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
