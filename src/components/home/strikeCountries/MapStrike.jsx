import React from "react";
import img from "../imageStrike/Untitled.png";
import animation from "./animation.css";
import { useState, useEffect } from "react";

const MapStrike = () => {
  const [minValue, setMinValue] = useState(1); // Минимальное значение
  const [maxValue, setMaxValue] = useState(100); // Максимальное значение
  const [randomNumber, setRandomNumber] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomNumber();
    }, 2000); // Генерация нового случайного числа каждые 3 секунды

    return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
  }, []);

  const generateRandomNumber = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);

    if (isNaN(min) || isNaN(max)) {
      console.error(
        "Некорректные значения для минимального и/или максимального чисел."
      );
      return;
    }

    if (min >= max) {
      console.error("Минимальное значение должно быть меньше максимального.");
      return;
    }

    const randomNum = getRandomInt(min, max);
    setRandomNumber(randomNum);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 98) + min);
  };

  return (
    <div className="flex">
      <img className="w-2/4 ml-28" src={img} alt="Canada" />
      <div>
        <div className="flex form-control flex-col ml-8">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder={
                randomNumber !== null
                  ? `1178${randomNumber}22587485.475`
                  : "Generation SAR..."
              }
              className="input input-bordered"
            />
            <span className="text-gray-400">RTS</span>
          </label>
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group ">
            <input
              type="text"
              placeholder={
                randomNumber !== null
                  ? `5587763876527579.${randomNumber}`
                  : "Generation SAR..."
              }
              className="input input-bordered"
            />
            <span className="text-gray-400">RTS</span>
          </label>
          <label className="input-group mt-5">
            <input
              type="text"
              placeholder={
                randomNumber !== null
                  ? `8998776${randomNumber}387852.279`
                  : "Generation SAR..."
              }
              className="input input-bordered"
            />
            <span className="text-gray-400">RTS</span>
          </label>
          <label className="input-group mt-5">
            <input
              type="text"
              placeholder={
                randomNumber !== null
                  ? `21958776${randomNumber}38765.255`
                  : "Generation SAR..."
              }
              className="input input-bordered"
            />
            <span className="text-gray-400">RTS</span>
          </label>
        </div>
        <div className="mx-40 mt-14 ml-48 h-36 w-36">
          <div class="progress-loader">
            <div class="progress"></div>
          </div>
          <div class="progress-loader-green">
            <div class="progress-green"></div>
          </div>
          <div class="progress-loader-brown">
            <div class="progress-green-brown"></div>
          </div>
          <div class="progress-loader-blue">
            <div class="progress-green-blue"></div>
          </div>
          <div class="progress-loader-bieber">
            <div class="progress-green-bieber"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapStrike;
