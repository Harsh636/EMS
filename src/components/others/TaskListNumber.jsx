import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        
        <div className='rounded-xl py-6 px-9 w-[45%] bg-[#ef6bad]'>
            <h2 className='text-3xl font-semibold'>{data? data.taskCount.newTask: "Hello"}</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-[#6062e2]'>
            <h2 className='text-3xl font-semibold'>{data? data.taskCount.active: "Hello"}</h2>
            <h3 className='text-xl font-medium '>Active Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-[#14b8a6]'>
            <h2 className='text-3xl font-semibold'>{data? data.taskCount.complete: "Hello"}</h2>
            <h3 className='text-xl font-medium '>Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-[#d54b69]'>
            <h2 className='text-3xl font-semibold'>{data? data.taskCount.failed: "Hello"}</h2>
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber