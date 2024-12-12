import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logos/gml2.png";
import { smallButton } from "../../styles/smallButton";
import { useSelector, useDispatch } from "react-redux";
import api from "../../assets/apis/api";
import { removeUser } from "../../features/user/userSlice";
import toast from "react-hot-toast";

const list = [
  { name: "Home", link: "/" },
  { name: "Ship", link: "/create-shipping" },
  { name: "Track", link: "/track-package" },
  { name: "About us", link: "/about-us" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "T & C", link: "/terms-and-condition" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user.auth);

  const logoutUser = async () => {
    const logoutPromise = api
      .post("logout")
      .then(() => {
        dispatch(removeUser());
        localStorage.removeItem("access_token");
        navigate("/");
      })
      .catch((error) => {
        dispatch(removeUser());
        localStorage.removeItem("access_token");
        navigate("/");
      });

    toast.promise(logoutPromise, {
      loading: "Logging out...",
      success: "Logout successful!",
      error: "Logout failed. Please try again.",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav
      ref={navbarRef}
      className="h-16 w-full fixed shadow font-serif bg-white z-30"
    >
      <div className="w-full h-full flex justify-between items-center relative px-6">
        <Link to={`/`} className="flex gap-1 items-center">
          <img src={Logo} alt="" className="h-12" />
          <span className="text-sm font-semibold text-primary">GML</span>
        </Link>
        <ul className="flex gap-5 max-lg:hidden items-center text-sm">
          {list.map((item) => {
            return (
              <Link
                key={item.link}
                to={item.link}
                className={`${
                  location.pathname === item.link
                    ? "scale-110 text-secondary"
                    : "text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
        <ul className="max-lg:hidden flex gap-5 items-center">
          {auth && (
            <Link to="/dashboard">
              <i className="fa-solid fa-circle-user text-primary text-2xl"></i>
            </Link>
          )}
          {auth ? (
            <button onClick={logoutUser} className={smallButton}>
              Logout
            </button>
          ) : (
            <Link to="/login" className={smallButton}>
              Login
            </Link>
          )}
        </ul>
        <ul className="lg:hidden flex gap-5 items-center">
          {auth && (
            <Link to="/dashboard">
              <i className="fa-solid fa-circle-user text-primary text-2xl"></i>
            </Link>
          )}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 h-6 flex flex-col justify-between transition-all duration-300 transform"
          >
            <span
              className={`w-full h-0.5 bg-primary transition-all ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-primary transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-primary transition-all ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </div>
        </ul>
        <div
          className={`${
            isOpen ? "h-80 p-5" : "h-0"
          } w-full bg-white transition-all ease-in-out absolute top-16 left-0 flex flex-col border-b`}
        >
          {list.map((item) => {
            return (
              <Link
                key={item.link}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`w-full h-10 px-2 text-primary transition-all ease-in-out hover:bg-primary/10 flex items-center ${
                  isOpen ? "" : "hidden"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          {auth ? (
            <button
              onClick={logoutUser}
              className={`w-full flex justify-center items-center py-1 text-sm bg-primary text-white shadow transition-all ease-in-out hover:bg-white hover:text-primary duration-500 ${
                isOpen ? "" : "hidden"
              }`}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className={`w-full flex justify-center items-center py-1 text-sm bg-primary text-white shadow transition-all ease-in-out hover:bg-white hover:text-primary duration-500 ${
                isOpen ? "" : "hidden"
              }`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
