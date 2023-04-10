import { useState } from 'react';
import Canvas from './challenges/Canvas';
import Counter from './challenges/Counter';
import ChatRoom from './ChatRoom';
import FormComponent from './Form.Component';
import StatusBar from './StatusBar';
import { useInterval } from './utils/customHooks';

const App = () => {
  const [roomId, setRoomId] = useState('general');

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    document.body.style.backgroundColor = randomColor;
  }, 2000);

  return (
    <>
      <h3>Custom Hooks Examples</h3>
      <StatusBar />
      <br />
      <br />
      <FormComponent />
      <br />
      <br />
      <br />
      <>
        <label>
          choose the chat room:{' '}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value={'general'}>General</option>
            <option value={'travel'}>Travel</option>
            <option value={'music'}>Music</option>
          </select>
        </label>
        <hr />
        <ChatRoom roomId={roomId} />
      </>
      <br />
      <h3>Counter Example</h3>
      <Counter />
      <br />
      <br />
      <Canvas />
    </>
  );
};

export default App;
