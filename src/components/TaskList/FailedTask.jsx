import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-orange-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py1 rounded">{task.taskTitle}</h3>
          <h4 className="text-sm">{task.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{task.category}</h2>
        <p className="text-sm mt-2">
          {task.taskDescription}
        </p>
        <div className='mt-4'>
            <button className='text-sm bg-red-500 w-full rounded py-1 px-2'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask