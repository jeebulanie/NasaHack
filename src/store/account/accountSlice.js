import { createSlice } from "@reduxjs/toolkit";
import { registerAccount, loginAccount } from "./accountAction";
import { addDataToLocalStorage } from "../../helpers/functions";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: null,
    loading: false,
    status: "",
    isAdmin: null,
    modal: false,
  },
  reducers: {
    clearStatusState: (state) => {
      state.status = "";
    },
    clearUserState: (state) => {
      state.user = null;
    },
    modalOpen: (state) => {
      state.modal = true;
    },
    modalClose: (state) => {
      state.modal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.loading = false;
        // action.payload.navigate("/login");
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.name;
        state.isAdmin = action.payload.isAdmin;
        addDataToLocalStorage(action.payload.name);
        console.log(state.isAdmin);
        // updateToken();
        // action.payload.navigate("/");
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      });
  },
});

export const { clearStatusState, clearUserState, modalClose, modalOpen } =
  accountSlice.actions;
export default accountSlice.reducer;
