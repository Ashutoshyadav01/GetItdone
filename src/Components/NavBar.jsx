import { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       <Link to={'/'}>
       <div className="text-xl font-bold">GetItDone</div>
       </Link> 

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
            <li className='hover:text-secondary'>
               <Link to={'/'}>
              Home
              </Link>
              </li>
          <li><a href="#" className="hover:text-secondary">Post Work</a></li>
          <li><a href="#" className="hover:text-secondary">My Work</a></li>
          <li>
            <Link to={"/login"}>
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-indigo-600">
              Login
            </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-3 space-y-2">
         
             <li>
               <Link to={'/'}>
              Home
              </Link>
              </li>
         
       
          <li><a href="#" className="block hover:text-secondary">Post Work</a></li>
          <li><a href="#" className="block hover:text-secondary">My Work</a></li>
          <li>
            <Link to={"/login"}>
           
            <button className="bg-secondary text-white px-4 py-2 rounded w-full">
              Login
            </button>
             </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
