import React, { useState } from 'react';

import LoginForm from '../statelessComponent/login_register_Form';

const Login = () => {
  const[loading, setLoading] = useState(false);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickHandler = async () => {
    setLoading(true);
    const body = {
      email,
      password,
    }

    try {
      const url = 'http://localhost:5000/api/user/login';

      const request = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      const response = await request.json();
      setLoading(false);
      console.log(response);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
  };

  return (
    <LoginForm
      loading={loading}
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickHandler={onClickHandler}
    />
  );
};

export default Login