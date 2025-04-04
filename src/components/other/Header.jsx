import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-0">
      {/* Greeting Section */}
      <h1 className="text-3xl font-semibold text-gray-200 text-center sm:text-left">
        Hello <br />
        <motion.span
          className="text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          👋
        </motion.span>
      </h1>

      {/* Log Out Button */}
      <motion.button
        onClick={logOutUser}
        className="bg-red-600 text-white  px-6 py-2 text-lg font-medium rounded-md shadow-md hover:bg-red-700 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Log Out
      </motion.button>
    </div>
  )
}

export default Header
