import React from "react";

const AllTask = ({ data }) => {
  return (
    <div className="bg-[#1c1c1c] p-5 text-lg font-medium rounded mt-5 h-60">
      <div className="bg-red-400 py-2 px-4  flex justify-between rounded mb-2">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5 ">Completed Task</h5>
        <h5 className="w-1/5">Failed Task</h5>
      </div>
      <div className="">
        {data.employees.map((emp, index) => {
          return (
            <div
              key={index}
              className="border-emerald-400 border-2 py-2 px-4 flex justify-between rounded mb-2"
            >
              <h2 className="w-1/5">{emp.name}</h2>
              <h3 className="w-1/5 text-blue-600">{emp.taskCount.newTask}</h3>
              <h5 className="w-1/5 text-yellow-400">{emp.taskCount.active}</h5>
              <h5 className="w-1/5 text-white-600">{emp.taskCount.complete}</h5>
              <h5 className="w-1/5 text-red-600">{emp.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
