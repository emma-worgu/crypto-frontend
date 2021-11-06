import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Dash from '../statelessComponent/dash';

const DashComponent = () => {
  const history = useHistory();

  const[loading, setLoading] = useState(false);
  const[user, setUser] = useState('');

  const getUser = async () => {
    try {
      setLoading(true);
      const url = 'https://crypto-backend1.herokuapp.com/api/user/';

      const request = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'auth-token': localStorage.getItem('jwt'),
          'ip': localStorage.getItem('ip'),
        }
      });

      const response = await request.json();
      setLoading(false);
      
      if (request.status === 200) {
        // console.log(request)
        setUser(response.user);
        return;
      }

      if (request.status === 401 || request.status === 403) {
        return history.push('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [])

  // console.log(user);
  return (
    <div>
      <Dash
        user={user}
        loading={loading}
      />
    </div>
  );
};

export default DashComponent;