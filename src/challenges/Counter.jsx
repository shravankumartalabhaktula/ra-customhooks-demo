import { useState } from 'react';
import { useCounter } from '../utils/customHooks';

const Counter = () => {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);

  return (
    <>
      <label>Set Duration: {delay} ms</label>
      <br />
      <input
        type={'range'}
        value={delay}
        min="10"
        max={'2000'}
        onChange={(e) => setDelay(Number(e.target.value))}
      />
      <h3>Counter: {count}</h3>
    </>
  );
};

export default Counter;
