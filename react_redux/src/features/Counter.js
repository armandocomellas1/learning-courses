import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './reducer';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const trigger = () => {
    dispatch(increment());
  };

  return (
    <div>
      <button
        type="button"
        onClick={trigger}
      >
        Increment&nbsp;
        <span>{count}</span>
      </button>
    </div>
  );
};

export default Counter;
