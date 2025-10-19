import HomePage from "./Components/HomePage"
import Navbar from "./Components/NavBar"
import LoginPage from "./Components/LoginPage"
import {Routes,Route} from 'react-router-dom'
import SignUpPage from "./Components/SignUpPage"
import Works from "./Components/Works"

function App() {
  return (
   <div className="min-h-screen bg-primary text-gray-100">
  <Navbar />
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/signup" element={<SignUpPage/>}/>
  <Route
          path="/works"
          element={
            localStorage.getItem("auth") === "true"
              ? <Works />
              : <LoginPage />
          }
        />

</Routes>
 
</div>

  )
}

export default App
