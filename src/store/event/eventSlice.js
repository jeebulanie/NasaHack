import { createSlice } from "@reduxjs/toolkit";
import { getEventCard, getOneEvent } from "./eventAction";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    loading: false,
    events: [],
    oneEvent: null,
    modal: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventCard.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getOneEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.oneEvent = action.payload;
      });
  },
});

export const { setSearchVal, changePage, changeCategories } =
  eventSlice.actions;
export default eventSlice.reducer;
