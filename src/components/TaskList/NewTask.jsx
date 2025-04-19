import React from 'react'


const NewTask = ({task, id, handleComplete}) => {
 
  
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-sky-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py1 rounded">{task.taskTitle}</h3>
          <h4 className="text-sm">{task.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{task.category}</h2>
        <p className="text-sm mt-2">
          {task.taskDescription}
        </p>
        <div className='mt-4'>
            <button onClick={()=>{handleComplete("accept", id)}} className='text-sm py-1 w-full bg-[#32c297]'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask