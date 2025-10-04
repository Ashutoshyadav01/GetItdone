import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-primary text-white px-2">

      <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your number or email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>

          <p className="text-primary hover:text-secondary cursor-pointer text-center">
            <Link to={"/signup"} > Don’t have an account? <span className="underline"  >Register</span></Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;
