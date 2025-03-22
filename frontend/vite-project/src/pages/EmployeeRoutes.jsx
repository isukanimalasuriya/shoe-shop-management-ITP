import React from 'react';
import { useState, useEffect } from "react";
import EmployeeLogin from './EmployeeLogin.jsx';
import HRDashboard from './HRDashboard.jsx';
import DeliveryDashboard from './DeliveryDashboard.jsx';
import DeliveryTasks from './DeliveryTasks.jsx';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const EmployeeRoutes = () => {
    

  return (
    <>
           <Toaster position="top-right"/>
    
            <Routes>
              <Route path="/employeelogin" element={<EmployeeLogin />}/>

              <Route path="/login" element={<Login setRole={setRole} />} />
                    {role === "HR_MANAGER" && <Route path="/hr-dashboard" element={<HRDashboard />} />}
                    {role === "DELIVERY_MANAGER" && <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />}
                    {role === "DELIVERY_PERSON" && <Route path="/delivery-tasks" element={<DeliveryTasks />} />}
            <Route path="*" element={<Navigate to="/login" />} />
    
            </Routes>
            <h2>Hello</h2>
            <p>kjj</p>
    </>
  )
}

export default EmployeeRoutes