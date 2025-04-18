import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full  items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder="Make a ui design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">catagory</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300mb-0.5">Description</h3>
          <textarea
            className=" px-4 py-2 bg-transparent w-full h-44 text-sm rounded outline-none border-white border-[1px] "
            name=""
            id=""
            cols="30"
            rows="10"
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
