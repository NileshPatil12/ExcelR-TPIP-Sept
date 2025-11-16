import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action/counterActions';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
};

export default App;
