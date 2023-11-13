import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserLogin, logout } from "../../helpers/functions";
import img from '../../images/f1eb5910-1baf-4615-9485-cee03c0db746.png'

const Navbar = () => {
  const { isAdmin, user, modal } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isAdmin);
  return (
    <>
      {isAdmin && (
        <button
          onClick={() => navigate("/card-create")}
          className="bg-blue-500 hover:bg-blue-600 hover:opacity-100 w-14 h-14 text-3xl rounded-full fixed bottom-20 right-20 z-10 opacity-70"
        >
          +
        </button>
      )}
      <header className="p-4 bg-black text-gray-100 mb-12 opacity-75 sticky top-0 z-20">
        <div className="flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={img} alt="" width='170' 
            height="170" className="ml-10 mt-5"/>
            
          </a>
          <div className="flex items-center w-1/5">
            {user && (
              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="p-2 rounded-md py-2.5 pe-10 shadow-sm sm:text-sm  opacity-90"
              />
            )}
          </div>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
              <a
              rel="noopener noreferrer"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl cursor-pointer"
              onClick={() => {

                navigate("/planets");
              }}
            >
              Space
            </a>
              <a
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl cursor-pointer"
                onClick={() => {
                  navigate("/cards");
                }}
              >
                Information
              </a>
              
            </li>

            {checkUserLogin() ? (

              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl cursor-pointer"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
