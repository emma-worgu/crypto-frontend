import React, { useState } from 'react';

import RegisterForm from '../statelessComponent/login_register_Form';

const Register = () => {
  const[loading, setLoading] = useState(false);


  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };


  const onClickHandler = async () => {
    setLoading(true);
    const body = {
      name,
      email,
      password,
      ip: localStorage.getItem('ip'),
    }

    try {
      const url = 'https://crypto-backend1.herokuapp.com/api/user/register';

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
      // console.log(error);
    }
  };
  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      loading={loading}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickHandler={onClickHandler}
    />
  );
};

export default Register