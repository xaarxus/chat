import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import NewMessage from './components/NewMessage';

import styles from './styles/App.module.css';

const site = 'thunderous-caramel-4296ba.netlify.app';
const ws = new WebSocket(`ws://${site}:4000`)


const App = () => {
  const [userName, setName]: [string, any] = useState('');
  const [messages, setMessage]: [Array<string>, any] = useState([]);

  useEffect(() => {
    ws.onopen = () => {};

    ws.onmessage = (msg: MessageEvent) => {
      const { data } = msg;
      setMessage([...messages, data]);
    };
  }, [messages])

  const sendMessage = (text: string): void => {
    ws.send(`${userName}: ${text}`);
  };

  return (
    <div className={(styles.container)}>

      <div>
      <h1>Welcome to Chat</h1>
      <br /><br />
        <Login
          userName={userName}
          setName={setName}
        />

        <br /><br />

        {userName && (
          <NewMessage
            setNewMessage={sendMessage}
          />
        )}
      </div>

      <br /><br />

      {userName && (
        <div className={(styles.messages)}>
          <span>Messages:</span>
          <ul>
            {messages.map((message): any => <li>{message}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
