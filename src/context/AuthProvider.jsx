import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    setLocalStorage();
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const cuser = JSON.parse(user);
      if (cuser.role == "employee") {
        setCurrentUser(cuser.data);
      }
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserData, currentUser , setCurrentUser}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
