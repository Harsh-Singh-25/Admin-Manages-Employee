import { React, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion } from 'framer-motion';

const AllTask = () => {
   const [userData, setUserData] = useContext(AuthContext);

   return (
      <motion.div
         className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl mt-8 shadow-2xl"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         {/* Header */}
         <motion.div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 py-4 px-8 flex flex-wrap sm:flex-nowrap justify-between rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
         >
            {['Employee Name', 'New Task', 'Active Task', 'Completed', 'Failed'].map((text, index) => (
               <h2
                  key={index}
                  className="text-lg font-semibold w-full sm:w-1/5 text-white text-center sm:text-left tracking-wide"
               >
                  {text}
               </h2>
            ))}
         </motion.div>

         {/* Task Rows */}
         <div className="space-y-4">
            {userData.map((elem, idx) => (
               <motion.div
                  key={idx}
                  className="border border-gray-700 py-4 px-8 flex flex-wrap sm:flex-nowrap justify-between rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
               >
                  <h2 className="text-lg font-medium w-full sm:w-1/5 text-gray-200 text-center sm:text-left">
                     {elem.firstName}
                  </h2>
                  <h3 className="text-lg font-medium w-full sm:w-1/5 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-center sm:text-left">
                     {elem.taskCounts.newTask}
                  </h3>
                  <h5 className="text-lg font-medium w-full sm:w-1/5 text-amber-400 hover:text-amber-300 transition-colors duration-300 text-center sm:text-left">
                     {elem.taskCounts.active}
                  </h5>
                  <h5 className="text-lg font-medium w-full sm:w-1/5 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-center sm:text-left">
                     {elem.taskCounts.completed}
                  </h5>
                  <h5 className="text-lg font-medium w-full sm:w-1/5 text-rose-500 hover:text-rose-400 transition-colors duration-300 text-center sm:text-left">
                     {elem.taskCounts.failed}
                  </h5>
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
};

export default AllTask;
