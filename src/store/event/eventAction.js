import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EVENT_API } from "../../helpers/consts";

export const addEventCard = createAsyncThunk(
  "events/addEventCard",
  async (event) => {
    const res = await axios.post(EVENT_API, event);
  }
);

export const getEventCard = createAsyncThunk(
  "events/getEventCard",
  async () => {
    const data = await axios.get(EVENT_API);
    return data.data;
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id, { dispatch }) => {
    await axios.delete(`${EVENT_API}/${id}`);
    dispatch(getEventCard());
  }
);

export const getOneEvent = createAsyncThunk(
  "events/getOneEvent",
  async (id) => {
    const oneEvent = await axios.get(`${EVENT_API}/${id}`);
    return oneEvent;
  }
);

export const editEvent = createAsyncThunk("events/editEvent", async (event) => {
  await axios.patch(`${EVENT_API}/${event}`, event);
});
