import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import { getEventCard } from "../../store/event/eventAction";

const CardList = () => {
  const { events } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventCard());
  }, []);

  return (
    <div>
      <h2 className="text-6xl text-white font-bold text-center">Actual News</h2>
      <div className="flex flex-wrap justify-center my-20">
        {events.map((event) => (
          <CardItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
