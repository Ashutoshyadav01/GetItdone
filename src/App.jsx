import HomePage from "./Components/HomePage"
import Navbar from "./Components/NavBar"
import LoginPage from "./Components/LoginPage"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
   <div className="min-h-screen bg-primary text-gray-100">
  <Navbar />
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/login" element={<LoginPage/>}/>
</Routes>
 
</div>

  )
}

export default App
