import React, { useContext } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({data, setUser}) => {
  const authData = useContext(AuthContext)
 
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} setUser={setUser}/>
      <CreateTask data={data}/>
      <AllTask data={authData.userData}/>
    </div>
  );
};

export default AdminDashboard;
