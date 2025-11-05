import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <nav className="bg-primary text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-xl font-bold">GetItDone</div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="hover:text-secondary">
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={isAuth ? "/post" : "/login"}>
              <button className="hover:text-secondary">Post Work</button>
            </Link>
          </li>

          <li className="hover:text-secondary">
            <Link to={isAuth ? "/works" : "/login"}>My Work</Link>
          </li>

          <li>
            {isAuth ? (
              <button
                className="bg-danger text-white px-4 py-2 rounded hover:bg-dangerDark"
                onClick={() => setIsAuth(false)}
              >
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-indigo-600">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-3 space-y-2">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={isAuth ? "/post" : "/login"}>Post Work</Link>
          </li>

          <li>
            <Link to={isAuth ? "/works" : "/login"}>My Work</Link>
          </li>

          <li>
            {isAuth ? (
              <button
                className="bg-danger text-white px-4 py-2 rounded w-full hover:bg-dangerDark"
                onClick={() => setIsAuth(false)}
              >
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="bg-secondary text-white px-4 py-2 rounded w-full">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
