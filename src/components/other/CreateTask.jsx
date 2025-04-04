import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-5 bg-black mt-5 rounded'>
           <form
        onSubmit={submitHandler}
        className="mt-20 bg-gray-900 text-white p-9 rounded-lg shadow-lg max-w-5xl mx-auto grid grid-cols-2 gap-5"
      >
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Create a Task</h2>

          {/* Task Title */}
          <label className="text-xl font-bold block text-gray-300 mb-2">
            Task Title
          </label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Date */}
          <label className="text-xl font-bold block text-gray-300 mt-4 mb-2">
            Date
          </label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Assign */}
          <label className="text-xl font-bold block text-gray-300 mt-4 mb-2">
            Assign To
          </label>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            type="text"
            placeholder="Employee name"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Category */}
          <label className="text-xl font-bold block text-gray-300 mt-4 mb-2">
            Category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Design, Development, etc."
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          {/* Description */}
          <div>
            <label className=" mt-13 text-xl font-bold block text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              cols="30"
              rows="6"
              placeholder="Write a detailed task description..."
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition"
          >
            Create Task
          </button>
        </div>
      </form>
        </div>
    )
}

export default CreateTask