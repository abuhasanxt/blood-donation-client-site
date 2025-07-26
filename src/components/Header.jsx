import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import "./Navbar.css"
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-food" className="hover:underline">
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/available-food" className="hover:underline">
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-food" className="hover:underline">
          My Foods
        </NavLink>
      </li>
      <li>
        <NavLink to="/request" className="hover:underline">
          My Request
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 ">
      {/* Left - Logo and name */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-xl lg:hidden"
          >
            <CiMenuBurger />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52 z-10"
          >
            {links}
          </ul>
        </div>
        <img
          className="hidden lg:block w-10 h-10 rounded mr-2"
          src={logo}
          alt="Logo"
        />
        <span className="font-bold text-lg">Food Sharing</span>
      </div>

      {/* Center - Menu Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Login */}
      <div className="navbar-end flex items-center gap-3">
        {/* Login Button */}
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                title={user.displayName}
                alt="user"
                className="w-12 h-12 rounded-full cursor-pointer"
              />

              <Link to="/login">
                <button onClick={logOut} className="btn">
                  Sign Out
                </button>
              </Link>
            </>
          ) : (
            <>
              <NavLink className="btn mr-1" to="/login">
                Login
              </NavLink>
              <NavLink className="btn" to="/registration">
                Register
              </NavLink>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
