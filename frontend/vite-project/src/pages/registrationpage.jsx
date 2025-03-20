import { useState } from "react"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function RegistrationPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email, password, firstName, lastName, address, phoneNo)

        axios.post("http://localhost:3000/api/users/", {
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName,
            address : address,
            phoneNo : phoneNo

        }).then((res)=>{
            console.log(res)
            toast.success("Registration success")
            const user = res.data.user
            if(user.role === "admin"){
              navigate("/")
            }
            else{
              navigate("/customerdashboard")
            }


        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.error)
        })
    }
    
    return(
        <div>
            <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-15" src="/images/logo.png" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Account Registration
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-xl shadow-2xl">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                value={firstName}
                onChange={(e)=>{
                  setFirstName(e.target.value)
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                value={lastName}
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                value={address}
                onChange={(e)=>{
                  setAddress(e.target.value)
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Phone number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phoneNo"
                placeholder="phone number"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                value={phoneNo}
                onChange={(e)=>{
                  setPhoneNo(e.target.value)
                }}
              />
            </div>
          </div>

          <div>
            <button
              
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}