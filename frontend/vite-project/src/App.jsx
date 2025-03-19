import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/loginpage';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/customerlogin">Login</Link>
    </div>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
        <Route path="/" element={<HomePage />}/>
          <Route path="/customerlogin" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
