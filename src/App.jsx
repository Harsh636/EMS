import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])


  function handleLogin(email, password) {
    if (authData && authData.admin.find((e) => e.email == email && e.password == password)) {
      const admin = authData.admin.find((e) => e.email == email && e.password == password);
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: "admin", data: admin}));
      setLoggedInUserData(admin);
      
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password);
      
      if(employee){
        setLoggedInUserData(employee)
        setUser("employee");
        localStorage.setItem('loggedInUser', JSON.stringify({role: "employee", data: employee}));
      }
      else {
        alert("Invalid Credential");
      }
    } 
  }
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (<AdminDashboard data={loggedInUserData}/>) : user=='employee'? (<EmployeeDashboard data={loggedInUserData}/>): ""}
    </>
  );
};

export default App;
