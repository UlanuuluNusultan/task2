import React, { useState } from 'react';
import Head from '../head/Head';

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
    <div>
      {open ? (
        <Head onClose={() => setOpen(false)} />
      ) : (
        <div>
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
    </div>
  );
};

export default Registration;
