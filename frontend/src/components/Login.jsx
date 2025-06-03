import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {

  const loginSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    // try {
    //   const response = await axios.post('/api/login/', values);
    //   if (response.status === 200) {
    //     setIsAuthenticated(true);
    //     navigate('/');
    //   } else {
    //     setErrors({ password: 'Invalid credentials' });
    //   }
    // } catch (error) {
    //   setErrors({ password: 'Login failed' });
    // } finally {
    //   setSubmitting(false);
    // }
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Formik
          initialValues={{ phone: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          <Form className="space-y-4">
            <div>
              <label className="block">Phone</label>
              <Field name="phone" className="w-full border p-2 rounded" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label className="block">Password</label>
              <Field name="password" type="password" className="w-full border p-2 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
          </Form>
        </Formik>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

