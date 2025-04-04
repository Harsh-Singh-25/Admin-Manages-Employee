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
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4 sm:px-6">
      <motion.div
        className="border-[3px] rounded-2xl border-emerald-500 p-6 sm:p-10 shadow-lg shadow-emerald-500/30 bg-[#121212] w-full max-w-[400px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 text-center mb-4 sm:mb-6">
            Welcome Back
          </h2>
          <form onSubmit={submitHandler} className="flex flex-col max-w-md mx-auto">
            <motion.input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none bg-[#1e1e1e] border border-gray-600 text-gray-300 text-sm sm:text-base md:text-lg py-2 sm:py-3 px-3 sm:px-4 rounded-lg mb-3 sm:mb-4 focus:border-emerald-500 transition-all duration-300 w-full"
              type="email"
              placeholder="Enter your email"
              whileFocus={{ scale: 1.02 }}
            />

            <div className="relative w-full">
              <motion.input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none bg-[#1e1e1e] border border-gray-600 text-gray-300 text-sm sm:text-base md:text-lg py-2 sm:py-3 px-3 sm:px-4 rounded-lg w-full focus:border-emerald-500 transition-all duration-300"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                whileFocus={{ scale: 1.02 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 sm:mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
