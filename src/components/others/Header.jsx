import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({data, setUser}) => {
  const {setCurrentUser} = useContext(AuthContext);
  const logoutUSer = ()=>{
    localStorage.setItem('loggedInUser', "");
    setUser("");
    setCurrentUser("");
    // window.location.reload();
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">{!data? "Harsh" : data.name} 👋</span> 
      </h1>
      <button onClick={logoutUSer} className="bg-gray-500 text-lg font-medium text-white px-5 py-2 rounded-sm">Log out</button>
    </div>
  );
};

export default Header;
