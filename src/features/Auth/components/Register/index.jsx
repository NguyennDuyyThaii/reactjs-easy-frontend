import RegisterForm from '../RegisterForm';
import React from 'react';

Register.propTypes = {};

function Register(props) {
  const handleSubmit = (values) => {
    console.log('Handle submit: ', values);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
