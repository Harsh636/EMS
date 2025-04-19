import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const { userData, setUserData, currentUser, setCurrentUser } = useContext(AuthContext);
    
    function handleComplete(name, id) {
      const updatedEmployee = userData.employees.map((emp) => {
        if (emp.id === currentUser.id) {
          const updatedTasks = emp.tasks.map((task, index) => {
            if (index === id && name === "complete") {
              return {
                ...task,
                complete: true,
                active: false,
                newTask: false,
              };
            }
            else if(index === id && name === "failed"){
              return{
                ...task,
                complete: false,
                active:false,
                newTask: false,
                failed: true,
              }
            }
            else if(index === id && name === "accept"){
              return{
                ...task,
                complete: false,
                active:true,
                newTask: false,
                failed: false,
              }
            }
            return task;
          });
          if(name === "complete"){
            return {
              ...emp,
              tasks: updatedTasks,
              taskCount: {
                ...emp.taskCount,
                active: emp.taskCount.active - 1,
                complete: emp.taskCount.complete + 1,
              },
            };
          }
          else if(name === "failed"){
            return {
              ...emp,
              tasks: updatedTasks,
              taskCount: {
                ...emp.taskCount,
                active: emp.taskCount.active - 1,
                failed: emp.taskCount.failed + 1,
              },
            };
          }
          else if(name === "accept"){
            return {
            ...emp,
            tasks: updatedTasks,
            taskCount: {
              ...emp.taskCount,
              newTask: emp.taskCount.newTask - 1,
              active: emp.taskCount.active + 1,
            },
          };
          }
          
        }
        return emp;
      });
      setUserData((prev) => ({
        ...prev,
        employees: updatedEmployee,
      }));
      
      const updatedCurrentUser = updatedEmployee.find(emp => emp.id === currentUser.id);
      setCurrentUser(updatedCurrentUser); // You’ll need to make `setCurrentUser` available in context
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: updatedCurrentUser }));
      // window.location.reload();
    }
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full  py-10 mt-10"
    >
        {!data? "":data.tasks.map((task, index)=>{
            if(task.active){
                return <AcceptTask key={index} id={index} task={task} handleComplete={handleComplete}/>
            }
            if(task.newTask){
                return <NewTask key={index} id={index} task={task} handleComplete={handleComplete}/>
            }
            if(task.complete){
                return <CompleteTask key={index} id={index} task={task}/>
            }
            if(task.failed){
                return <FailedTask key={index} id={index} task={task}/>
            }
        })}
      
      
    </div>
  );
};

export default TaskList;
