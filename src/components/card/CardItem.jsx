import React, { useState } from "react";
import { deleteEvent, getOneEvent } from "../../store/event/eventAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalOpen } from "../../store/account/accountSlice";
import DetailsCart from "../home/DetailsCart";

const CardItem = ({ event }) => {
  const { isAdmin, modal } = useSelector((state) => state.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => dispatch(modalOpen())}
        className="w-1/4 z-10 m-4 p-6 flex-wrap bg-gray-100 rounded-3xl relative"
      >
        {event.image ? (
          <img
            className=" -z-10 w-full rounded-2xl border-white border-solid border-2"
            src={event.image}
            alt={event.name}
          />
        ) : (
          <img
            className=" -z-10 w-full  rounded-2xl border-white border-solid border-2"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhpy1JDo_f8NLizXYSVQo3asiUwGdBS-FkUdtAL8M-5Hrv-B-a"
            alt={event.name}
          />
        )}

        <h2 className="text-xl font-bold mt-2 mx-2">{event.name}</h2>
        <ul className="text-xs ml-2 text-gray-600">
          <li>{event.place}</li>
          <li>{event.date}</li>
          <li>{event.category}</li>
        </ul>
        <h3 className="m-2">{event.description}</h3>
        <div className=" flex flex-row justify-around">
          {isAdmin && (
            <>
              <button
                onClick={() => {
                  navigate("/card-edit");
                }}
                className="bg-gray-500 w-1/4 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteEvent(event.id))}
                className="bg-gray-500 w-1/4 rounded-md"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
      {modal && <DetailsCart event={event} />}
    </>
  );
};

export default CardItem;
