import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();

  console.log(email,"email",password,"pass")

function verifyUser(email, password) {
  if (!email || !password) {
    console.log("please enter email or password");
    return;
  }

  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailOrNumber: email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      
      if (data.message === "Login successful") {
        localStorage.setItem("auth","true");
          navigate("/works");          // ✅ redirects page
        }
      

    })
    .catch((err) => console.log(err));
}

  return (

    <div className="min-h-screen flex items-center justify-center bg-primary text-white px-2">

      <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your number or email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={()=>verifyUser(email,password)}
          >
            Login
          </button>

          <p className="text-primary hover:text-secondary cursor-pointer text-center">
            <Link to={"/signup"} > Don’t have an account? <span className="underline"  >Register</span></Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;
