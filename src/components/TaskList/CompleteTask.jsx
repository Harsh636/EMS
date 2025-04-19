import React from "react";

const CompleteTask = ({ task, id }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-[#14b8a6] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py1 rounded">
          {task.taskTitle}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.category}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>
      <div className="mt-4">
        <h3 className="w-full flex  text-lg rounded items-center justify-center  py-1">
          
          Completed Task
        </h3>
      </div>
    </div>
  );
};

export default CompleteTask;
