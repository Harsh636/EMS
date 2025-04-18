import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    console.log("hello guys");
    e.preventDefault();
    handleLogin(details.email, details.password);

    setDetails({ email: "", password: "" });
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center "
        >
          <input
            onChange={handleChange}
            className="required outline-none bg-transparent  border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={details.email}
            name="email"
          />
          <input
            onChange={handleChange}
            className="required outline-none bg-transparent  border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter password"
            value={details.password}
            name="password"
          />
          <button className="text-white outline-none w-full  border-none   border-2 bg-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-white mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
