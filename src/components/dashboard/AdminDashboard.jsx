import React, { useContext } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({data}) => {
  const authData = useContext(AuthContext)
 
  return (
    <div className="h-screen w-full p-10">
      <Header data={data}/>
      <CreateTask data={data}/>
      <AllTask data={authData}/>
    </div>
  );
};

export default AdminDashboard;
