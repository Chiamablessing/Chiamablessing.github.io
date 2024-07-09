

import React, { useState } from 'react';
import './Signup.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''


  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="signup-container">
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' alt='pinterest Logo' className='logo'></img>
      <h1>Welcome to Pinterest</h1>
      <h3>Find new ideas to try</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
           placeholder ="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Birthdate</label>
          <input
            type="date"
            value={formData.birthdate}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div >
       <div className='button'>
       <button className='button1' type="submit">Continue</button>
        <h3> OR</h3>
        <button className='button2' type="submit">Continue with Google</button>
        <p>By continuing, you agree to Pinterest's <br></br>
              <a href="https://policy.pinterest.com/en/terms-of-service"><b>Terms of Service</b> </a>
           and acknowledge you've read our
           <br></br> <a href="https://policy.pinterest.com/en/privacy-policy"><b>Privacy Policy</b> </a>&nbsp;<a href="https://policy.pinterest.com/notice-at-collection"><b>Notice at collection</b> </a>
            <br></br> <br></br>
            Already a member?&nbsp;<a href=''>Log in</a>

        </p>

        </div>
        <div className='footer'>
          <h3>Create a free business account</h3>
        </div>
      </form>
    </div>
  );
};

export default Signup;
