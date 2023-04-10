import { useOnlineStatus } from './utils/customHooks';

const StatusBar = () => {
  const isOnline = useOnlineStatus();

  const handleSaveClick = () => {
    console.log('Save clicked');
  };

  return (
    <>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
      <br />
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? 'Save Progress' : 'Reconnecting...'}
      </button>
    </>
  );
};

export default StatusBar;
