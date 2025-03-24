import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/employee/employeelogin", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      setRole(res.data.role);

      if (res.data.role === "HR_MANAGER") navigate("/hr-dashboard");
      else if (res.data.role === "DELIVERY_MANAGER") navigate("/delivery-dashboard");
      else if (res.data.role === "DELIVERY_PERSON") navigate("/delivery-tasks");
    } catch (error) {
      console.error(error.response.data.error);
    }
  };
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center">
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign in to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your email</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              placeholder="********" 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition duration-300">
            Log in to your account
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmployeeLogin