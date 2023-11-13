import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCOUNT_API } from "../../helpers/consts";
import axios from "axios";

// export const registerAccount = createAsyncThunk(
//   "account/registerAccount",
//   async ({ user, navigate }) => {
//     const accountData = new FormData();
//     accountData.append("username", user.username);
//     accountData.append("password", user.password);
//     const res = await axios.post(`${ACCOUNT_API}/register/`, accountData);
//     console.log(res);
//     return { navigate };
//   }
// );

// export const loginAccount = createAsyncThunk(
//   "account/loginAccount",
//   async ({ user, navigate }) => {
//     const accountData = new FormData();
//     accountData.append("username", user.username);
//     accountData.append("password", user.password);
//     const { data } = await axios.post(`${ACCOUNT_API}/api/token/`, accountData);
//     return { data, navigate, user: user.username };
//   }
// );

export const registerAccount = createAsyncThunk(
  "account/registerAccount",
  async (user) => {
    const admin = user.name.find();
    const res = await axios.post(ACCOUNT_API, user);
    console.log(user);
  }
);

export const loginAccount = createAsyncThunk(
  "account/loginAccount",
  async (user) => {
    const data = await axios.get(ACCOUNT_API);
    const oneUser = data.data.find(
      (item) => user.name === item.name && user.password === item.password
    );

    if (!oneUser) {
      alert("Такого пользователя нету в базе данных");
    }

    return oneUser;
  }
);
