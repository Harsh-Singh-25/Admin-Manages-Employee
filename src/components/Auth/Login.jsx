import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        className="border-[3px] rounded-2xl border-emerald-500 p-10 shadow-lg shadow-emerald-500/30 bg-[#121212] w-[400px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-3xl font-bold text-gray-200 text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col">
          <motion.input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-[#1e1e1e] border border-gray-600 text-gray-300 text-lg py-3 px-5 rounded-lg mb-4 focus:border-emerald-500 transition-all duration-300"
            type="email"
            placeholder="Enter your email"
            whileFocus={{ scale: 1.02 }}
          />

          <div className="relative w-full">
            <motion.input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none bg-[#1e1e1e] border border-gray-600 text-gray-300 text-lg py-3 px-5 rounded-lg w-full focus:border-emerald-500 transition-all duration-300"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              whileFocus={{ scale: 1.02 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <motion.button
            className="mt-6 text-white bg-emerald-600 hover:bg-emerald-700 font-semibold text-lg py-3 px-8 w-full rounded-lg shadow-md shadow-emerald-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
