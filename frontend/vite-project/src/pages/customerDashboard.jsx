import React, { useState } from 'react'
import { useAuthStore } from '../store/authStore';
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import axios from "axios";

const customerDashboard = () => {
    const { user, logout } = useAuthStore();
    const [name, setName] = useState(user?.name || '');
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
    const navigate = useNavigate();

    const handleLogout = ()=>{
        logout()
        navigate("/customerlogin");
    }

    const handleUpdateProfile = async () => {
      try {
          const response = await axios.put("http://localhost:5000/api/auth/update-profile", {
              name,
              phoneNumber,
          }, { withCredentials: true });
  
          if (response.data.success) {
              console.log("Profile updated successfully");
              // Update the user data in your store or state
          } else {
              console.log("Failed to update profile");
          }
      } catch (error) {
          console.log("Error updating profile", error);
      }
  };

  return (
    <div>
      <NavBar/>


<div class="p-30 font-display">
<div>
  <div class="px-4 sm:px-0">
    <h3 class="text-base/7 font-semibold text-gray-900">Customer Information</h3>
    <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details.</p>
  </div>
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm/6 font-medium text-gray-900">Full name</dt>
        <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm/6 font-medium text-gray-900">Mobile number</dt>
        <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/></dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm/6 font-medium text-gray-900">Email address</dt>
        <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.email}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm/6 font-medium text-gray-900">Joined on An Shoe Paradise</dt>
        <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm/6 font-medium text-gray-900">About</dt>
        <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
      </div>

    </dl>
    <button onClick={handleUpdateProfile}
    className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all'>
      Update Details
    </button>
    <button 
        onClick={handleLogout}
        class="flex items-center w-full p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 group">
        <svg class="shrink-0 w-5 h-5 text-white transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
        </svg>
        <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
    </button>
  </div>
</div>
</div>

    </div>
  )
}

export default customerDashboard
