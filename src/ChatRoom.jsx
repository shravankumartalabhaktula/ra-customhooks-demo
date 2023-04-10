import { useState } from 'react';
import { useChatRoom } from './utils/customHooks';

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
  });

  return (
    <>
      <label htmlFor="url">
        Server URL:
        <input
          type="text"
          name="url"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to {roomId} room!</h1>
    </>
  );
};

export default ChatRoom;
