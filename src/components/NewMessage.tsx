import React, { useState } from 'react';

const NewMessage = ({ setNewMessage }: { setNewMessage: any }) => {
  const [inputValue, setValue] = useState('');

  const sendMessage = () => {
    setNewMessage(inputValue);
    setValue('');
  }

  return (
    <div>
      <span>Type a message: </span><br />

      <input
        value={inputValue}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <br /><br />

      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default NewMessage;
