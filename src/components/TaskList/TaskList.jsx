import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full  py-10 mt-10"
    >
        {!data? "":data.tasks.map((task, index)=>{
            if(task.active){
                return <AcceptTask key={index} task={task}/>
            }
            if(task.newTask){
                return <NewTask key={index} task={task}/>
            }
            if(task.complete){
                return <CompleteTask key={index} task={task}/>
            }
            if(task.failed){
                return <FailedTask key={index} task={task}/>
            }
        })}
      
      
    </div>
  );
};

export default TaskList;
