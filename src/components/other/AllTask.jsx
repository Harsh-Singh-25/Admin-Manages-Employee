import { React, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion } from 'framer-motion';

const AllTask = () => {
   const [userData, setUserData] = useContext(AuthContext);

   return (
      <motion.div 
         className='bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl mt-5 shadow-2xl'
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         {/* Header */}
         <motion.div 
            className='bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 py-4 px-6 flex justify-between rounded-lg shadow-lg'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
         >
            {["Employee Name", "New Task", "Active Task", "Completed", "Failed"].map((text, index) => (
               <h2 key={index} className='text-lg font-semibold w-1/5 text-white text-center'>
                  {text}
               </h2>
            ))}
         </motion.div>

         {/* Task Rows */}
         <div className='space-y-4'>
            {userData.map((elem, idx) => (
               <motion.div 
                  key={idx} 
                  className='border border-indigo-500/40 py-3 px-6 flex justify-between rounded-lg bg-gray-800/60 hover:bg-gray-700/60 transition-all duration-300 transform hover:shadow-lg'
                  whileHover={{ scale: 1.05 }}
               >
                  <h2 className='text-lg font-medium w-1/5 text-gray-200 text-center'>{elem.firstName}</h2>
                  <h3 className='text-lg font-medium w-1/5 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-center'>{elem.taskCounts.newTask}</h3>
                  <h5 className='text-lg font-medium w-1/5 text-amber-400 hover:text-amber-300 transition-colors duration-300 text-center'>{elem.taskCounts.active}</h5>
                  <h5 className='text-lg font-medium w-1/5 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-center'>{elem.taskCounts.completed}</h5>
                  <h5 className='text-lg font-medium w-1/5 text-rose-500 hover:text-rose-400 transition-colors duration-300 text-center'>{elem.taskCounts.failed}</h5>
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
};

export default AllTask;
