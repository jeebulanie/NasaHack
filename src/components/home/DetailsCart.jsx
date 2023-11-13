import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent } from "../../store/event/eventAction";
import { useParams } from "react-router-dom";

const DetailsCart = () => {
  const { oneEvent, loading, error } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneEvent(id));
  }, [id]); // Включите 'id' в массив зависимостей

  // Проверка наличия данных
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!oneEvent) {
    return <div>No data found</div>;
  }

  // Дополнительная проверка полей oneEvent перед их отображением
  const { name, fulldescrip } = oneEvent;

  return (
    <div className="flex flex-row newColor p-8 items-center w-2/3 rounded-xl justify-center m-auto">
      <div className="ml-5">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-xl font-bold ">{fulldescrip}</p>
        <button>Close</button>
      </div>
    </div>
  );
};

export default DetailsCart;
