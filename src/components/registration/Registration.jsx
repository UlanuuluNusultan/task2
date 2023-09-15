import React, { useState } from 'react';
import Head from '../head/Head';
import styled from 'styled-components';
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    email: "", 
    password: ""
  });

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
  };

  const validateForm = () => {
    const errors = {};

    if (email !=='ulanuulunursultan36@gmail.com') {
      errors.email = 'Email is required';
    }

    if (password !=='1234') {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignClick = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setOpen(true);
    }
  };
 

  return (
    <Registr>
      {open ? (
        <Head onClose={() => setOpen(false)} />
      ) : (
        <div className='regictr'>
          <h1>Войти</h1>
          <form onSubmit={handleSignClick}>
            <input
              name="email"
              type="text"
              placeholder="Enter your email.."
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <button type="submit">Sign</button>
          </form>
        </div>
      )}
    </Registr>
  );
};

export default Registration;
const Registr = styled.div`
/* Родительский контейнер */
.regictr {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

/* Заголовок */
.regictr h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Форма входа */
.regictr form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Инпуты */
.regictr input[type="text"],
.regictr input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Ошибки */
.regictr .error {
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
}

/* Кнопка Sign */
.regictr button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.regictr button:hover {
  background-color: #0056b3;
}


`
