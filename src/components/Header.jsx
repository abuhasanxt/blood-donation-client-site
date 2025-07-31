import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/blood.webp";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const handleDashboardClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/available-food" className="hover:underline">
          Available Blood
        </NavLink>
      </li>

      <li>
        <button onClick={handleDashboardClick} className="hover:underline">
          Dashboard
        </button>
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
        <h2 className="font-bold text-lg text-red-600">Blood <span className="text-green-500">Connect</span></h2>
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
