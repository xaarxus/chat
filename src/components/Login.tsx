import React, { useState } from 'react';

const Login = ({ userName, setName }: { userName: string, setName: any }) => {
  const [inputValue, setValue] = useState('');

  const handleLogin = () => {
    setName(inputValue);
  }

  return (
    <div>
      {userName && (
        <h2>{`Hello, ${userName}!`}</h2>
      )}
      {!userName && (
        <>
          <input
            value={inputValue}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  )
}

export default Login;
