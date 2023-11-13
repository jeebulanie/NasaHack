import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount } from "../../store/account/accountAction";
import { clearStatusState } from "../../store/account/accountSlice";
import mercury from "./egg.png";
import saturn from "./pngegg.png";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    isAdmin: false,
  });

  const { loading, status } = useSelector((state) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <>
      <div className="absolute -left-60 -top-56">
        <img src={mercury} alt="h" />
      </div>
      <div>
        <img
          className="w-1/3 absolute -bottom-32 right-12 "
          src={saturn}
          alt="s"
        />
      </div>
      <div className="max-w-sm mx-auto flex flex-col px-2 m-20 p-2">
        <div className="bg-white px-6 py-14 rounded shadow-md text-black w-full">
          <h3 className="mb-8 font-bold text-3xl text-center">Sign In</h3>
          <input
            type="text"
            className="border border-slate-300 w-full p-3 rounded mb-4"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <input
            type="password"
            className="border border-slate-300 w-full p-3 rounded mb-4"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            className="w-full text-center py-3 rounded bg-blue-950 text-white hover:bg-blue-900"
            onClick={() => {
              dispatch(loginAccount(user));
              navigate("/");
            }}
          >
            login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
