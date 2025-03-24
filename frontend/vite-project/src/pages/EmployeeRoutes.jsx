import React from 'react';
import { useState, useEffect } from "react";
import EmployeeLogin from './EmployeeLogin.jsx';
import HRDashboard from './HRDashboard.jsx';
import DeliveryDashboard from './DeliveryDashboard.jsx';
import DeliveryTasks from './DeliveryTasks.jsx';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const EmployeeRoutes = () => {
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <>
           <Toaster position="top-right"/>
    
            <Routes>

            <Route path="/employeelogin" element={<EmployeeLogin setRole={setRole} />} />
            {role && role === "HR_MANAGER" && <Route path="/hr-dashboard" element={<HRDashboard />} />}
            {role && role === "DELIVERY_MANAGER" && <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />}
            {role && role === "DELIVERY_PERSON" && <Route path="/delivery-tasks" element={<DeliveryTasks />} />}
    
            </Routes>
            <h2>Hello</h2>
            <p>kjj</p>
    </>
  )
}

export default EmployeeRoutes