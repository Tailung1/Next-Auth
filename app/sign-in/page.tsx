"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const route = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });
    if (response?.ok) {
      route.push("/");
    }
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
            />
          </div>
          <button
            type='submit'
            className='w-full cursor-pointer p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
          >
            Login
          </button>
          <button
          type="button"
            onClick={() => signIn("github")}
            className=' cursor-pointer flex items-center justify-center w-full mt-3 p-4 text-sm font-semibold text-white bg-[#24292f] rounded-md hover:bg-[#1c2128] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white active:bg-[#1a1f24]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='bi bi-github mr-2'
              width='16'
              height='16'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.56 5.47 7.63.4.07.55-.17.55-.39v-1.46c-2.23.48-2.7-.84-2.7-.84-.36-.91-.88-1.15-.88-1.15-.72-.49-.01-.48.01-.49 1.67 0 2.54 1.73 2.54 1.73 1.48 2.53 3.86 1.8 4.79 1.37.14-.98.58-1.8 1.04-2.21-1.82-.2-3.73-.91-3.73-4.09 0-.91.33-1.66.88-2.24-.09-.2-.38-.91.09-1.91 0 0 .7-.23 2.2.88 1.03-.29 2.14-.29 3.17 0 1.5-1.11 2.2-.88 2.2-.88.48 1 0 1.71.09 1.91.55.58.88 1.33.88 2.24 0 3.18-1.91 3.88-3.73 4.09.46.41.89 1.15 1.03 2.21.93.43 3.31 1.16 4.79-1.37 0 0 .87-1.73 2.54-1.73 1.48 0 .72-.49 1.15-1.15 1.15-.85 0-1.35-.32-2.3-1.52-.89-.92-1.74-2.36-2.16-4.02-1.56 2.31-.28 5.66 2.16 6.42.58.17.67.47.67.77v1.47c0 .22-.15.46-.55.39C13.71 14.56 16 11.54 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
            Sign in with GitHub
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
