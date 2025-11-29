"use client";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-center text-gray-700 mb-6'>
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-600'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-600'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
          >
            Login
          </button>
        </form>
        {/* Optional "Forgot Password" Link */}
        <div className='mt-4 text-center'>
          <a
            href='#'
            className='text-sm text-green-500 hover:underline'
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
