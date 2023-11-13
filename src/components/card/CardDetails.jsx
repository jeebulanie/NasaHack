import React from "react";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const { oneEvent, modal } = useSelector((state) => state.events);
  return <div className=""></div>;
};

export default CardDetails;
