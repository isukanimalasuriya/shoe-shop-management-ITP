import { useState } from "react";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email, password)

        axios.post("http://localhost:3000/api/users/login", {
            email : email,
            password : password
        }).then((res)=>{
            console.log(res)
            toast.success("Login success")
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
          Sign in to your account
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
              <div className="text-sm">
                <a href="#" className="font-semibold text-blue-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
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
            <button
              
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a customer?
          <a href="#" className="font-semibold text-blue-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
    </div>
    )
}