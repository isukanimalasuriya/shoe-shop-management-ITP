import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import CustomerDashboard from "./pages/customerDashboard";
import { FloatingShape } from "./components/FloatingShape";
import CustomerSignup from "./pages/CustomerSignup";
import CustomerLoginPage from "./pages/CustomerLoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

const RedirectAuthenticatedUser = ({children})=>{
  const {isAuthenticated, user} = useAuthStore();

  if(isAuthenticated && user.isVerified){
    return <Navigate to="/" replace />
  }
  return children
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 justify-center relative overflow-hidden">
      <h1>Welcome to Home</h1>
      <Link to="/customerlogin">Login</Link>
      <Link to="/customerregister">Register</Link>
      <Link to="/floating">Floating</Link>
      <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
      <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
    </div>
  );
}

function App() {
  const { isAuthenticated, checkAuth, user } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth])

  console.log("isAuthen", isAuthenticated)
  console.log("user", user)

  return (
    <>
      <BrowserRouter>
       <Toaster position="top-right"/>

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/customerlogin" element={<CustomerLoginPage />}/>
          <Route path="/customerdashboard" element={<CustomerDashboard />}/>

          <Route path="/customerregister" element={<RedirectAuthenticatedUser>
              <CustomerSignup />
            </RedirectAuthenticatedUser>}/>

          <Route path="/floating" element={<FloatingShape />}/>
          <Route path="/verify-email" element={<EmailVerificationPage />}/>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
