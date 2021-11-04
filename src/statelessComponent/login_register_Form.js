import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/loginForm.css';

const Register_Login_Form = ({ 
  name, 
  email, 
  password,
  loading,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onClickHandler
}) => {

  const linkFunc = () => {
    if (document.location.pathname === '/login') {
      return (
        <p className='card-p'>Login your Account. Don't have an Account ? <Link to='/register'> Register</Link></p>
      );
    }
    return (
      <p className='card-p'>Create an Account. Already have an Account ? <Link to='/login'> Log In</Link></p>
    );
  };

  const inputFunc = () => {
    if (document.location.pathname === '/login') {
      return null;
    }
    return (
      <input type='text' placeholder='Name' className='card-input' id='name' value={name} onChange={onChangeName} required/>
    );
  };

  const resetPassFunc = () => {
    if (document.location.pathname === '/login') {
      return (
        <div className='forgot-pass'>
          <h5>Forgot Password ? Reset</h5>
        </div>
      );
    }
    return null;
  };

  let buttonText;

  if (loading === true && document.location.pathname === '/login') {
    buttonText = 'Please Wait...';
  } else if (loading === false && document.location.pathname === '/login') {
    buttonText = 'Log In';
  } else if (loading && document.location.pathname === '/register') {
    buttonText = 'Registering...';
  } else if (loading === false && document.location.pathname === '/register') {
    buttonText = 'Register';
  }

  const header = document.location.pathname === '/login' ? 'Log In' : 'Register'
  const mobile = document.location.pathname === '/login' ? 'mobile login-card' : 'login-card';
  return (
    <div className='login-body'  style={{ backgroundColor: 'black'}}>
      <div className={mobile}>
        <div className='card-header'>
          <h2 className='card-h2'>{header}</h2>
            {linkFunc()}
        </div>
        <div className='card-body'>
          {inputFunc()}
          <input type='text' placeholder='Email' className='card-input' id='email' value={email} onChange={onChangeEmail} required />
          <input type='password' placeholder='Password' className='card-input' id='password' value={password} onChange={onChangePassword} required />
          {resetPassFunc()}
          <div className='login-button-div'>
            <button className='login-button' onClick={onClickHandler}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register_Login_Form;