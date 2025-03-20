import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/loginpage';
import toast, { Toaster } from 'react-hot-toast';
import CustomerDashboard from "./pages/customerDashboard";
import RegistrationPage from "./pages/registrationpage";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/customerlogin">Login</Link>
      <Link to="/customerregister">Register</Link>
    </div>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
       <Toaster position="top-right"/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/customerlogin" element={<LoginPage />}/>
          <Route path="/customerdashboard" element={<CustomerDashboard />}/>
          <Route path="/customerregister" element={<RegistrationPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
