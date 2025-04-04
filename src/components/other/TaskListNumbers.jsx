// Task Stats Dashboard Component
import React from 'react';
import { motion } from 'framer-motion';

const TaskStatsDashboard = ({ data }) => {
  // Animation variants
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <motion.div 
        className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300'
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className='text-3xl font-bold text-white'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium text-blue-100 flex items-center'>
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
          New Task
        </h3>
      </motion.div>
      
      <motion.div 
        className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300'
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
      >
        <h2 className='text-3xl font-bold text-white'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl mt-0.5 font-medium text-green-100 flex items-center'>
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Completed Task
        </h3>
      </motion.div>
      
      <motion.div 
        className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300'
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
      >
        <h2 className='text-3xl font-bold text-amber-900'>{data.taskCounts.active}</h2>
        <h3 className='text-xl mt-0.5 font-medium text-amber-900 flex items-center'>
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Accepted Task
        </h3>
      </motion.div>
      
      <motion.div 
        className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-br from-rose-500 to-red-600 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition-all duration-300'
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
      >
        <h2 className='text-3xl font-bold text-white'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl mt-0.5 font-medium text-rose-100 flex items-center'>
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Failed Task
        </h3>
      </motion.div>
    </div>
  );
};

export default TaskStatsDashboard;