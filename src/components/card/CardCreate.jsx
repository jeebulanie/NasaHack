import React, { useState } from "react";
import { addEventCard } from "../../store/event/eventAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardCreate = () => {
  const [event, setEvent] = useState({
    image: "",
    name: "",
    fullDescrip: "",
    description: "",
    date: "",
    place: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-1/3 bg-blue-800 m-auto my-12 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold text-center">Add event</h3>
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Image"
          onChange={(e) => setEvent({ ...event, image: e.target.value })}
        />
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Name"
          onChange={(e) => setEvent({ ...event, name: e.target.value })}
        />
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Full Description"
          onChange={(e) => setEvent({ ...event, fullDescrip: e.target.value })}
        />
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Category"
          onChange={(e) => setEvent({ ...event, category: e.target.value })}
        />
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Description"
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Date"
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          className="m-4 w-4/5 p-2 h-8 rounded-lg"
          type="text"
          placeholder="Place"
          onChange={(e) => setEvent({ ...event, place: e.target.value })}
        />
        <button
          className="m-4 w-4/5 h-8 rounded-lg bg-gray-400 text-2xl font-bold"
          onClick={() => {
            dispatch(addEventCard(event));
            navigate("/cards");
          }}
        >
          Add event
        </button>
      </div>
    </div>
  );
};

export default CardCreate;
