import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const {userData, setUserData} = useContext(AuthContext);

  const [asignT, setAsignTo] = useState({ asignTo: "" });
  const [task, setTask] = useState({
    active: false,
    newTask: true,
    complete: false,
    failed: false,
    taskTitle: "",
    taskDate: "",
    category: "",
    taskDescription: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    if (name == "asignTo") {
      setAsignTo({asignTo: value});
    } else {
      setTask((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    
    const updatedData = userData.employees.map((emp)=>{
      if(emp.name==asignT.asignTo){
        return {
          ...emp,
          tasks: [...(emp.tasks || []), task],
          taskCount: {...emp.taskCount, newTask: emp.taskCount.newTask+1}
        };
      }
      return emp;
    })
    setUserData((prev)=>({
      ...prev,
      employees: updatedData
    }));
    
    console.log(updatedData);

    setAsignTo({asignTo:""});
    setTask({
      active: false,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "",
      taskDate: "",
      category: "",
      taskDescription: "",
    });
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap w-full  items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder="Make a ui design"
              value={task.taskTitle}
              name="taskTitle"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="date"
              value={task.taskDate}
              name="taskDate"
            />
          </div>
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">Asign to</h3>
            <input
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder="Employee name"
              value={asignT.asignTo}
              name="asignTo"
            />
          </div>
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">catagory</h3>
            <input
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              placeholder="Design, dev, etc"
              value={task.category}
              name="category"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300mb-0.5">Description</h3>
          <textarea
            onChange={handleChange}
            className=" px-4 py-2 bg-transparent w-full h-44 text-sm rounded outline-none border-white border-[1px] "
            id=""
            cols="30"
            rows="10"
            value={task.taskDescription}
            name="taskDescription"
          ></textarea>

          <button className="bg-green-400 mt-3 w-full rounded h-10 text-lg">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
