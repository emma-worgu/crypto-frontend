import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RegisterForm from '../statelessComponent/login_register_Form';

const Register = () => {
  const history = useHistory();

  const[loading, setLoading] = useState(false);
  const[error, setError] = useState({
    message: '',
    isError: false,
  });


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

  const closeError = () => {
    setError({
      isError: false,
    });
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

      if (request.status === 200) {
        localStorage.setItem('jwt', response.token)
        return history.push('/dash');
      } else {
        setError({
          message: response.message,
          isError: true,
        });
      }
    } catch (error) {
      setLoading(false);
      setError({
        message: 'Something Went. Check Network Connectivity',
        isError: true,
      });
    }
  };
  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      loading={loading}
      error={error}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickHandler={onClickHandler}
      closeError={closeError}
    />
  );
};

export default Register