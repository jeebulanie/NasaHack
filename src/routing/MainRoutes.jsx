import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../components/account/Login";
import Register from "../components/account/Register";
import CardCreate from "../components/card/CardCreate";
import CardEdit from "../components/card/CardEdit";
import CardList from "../components/card/CardList";
import MapStrike from "../components/home/strikeCountries/MapStrike";
import Brazil from "../components/home/strikeCountries/Brazil";
import Turkey from "../components/home/strikeCountries/Turkey";
import Kyrgyzstan from "../components/home/strikeCountries/Kyrgyzstan";
import Russia from "../components/home/strikeCountries/Russia";
import SolarExplorer from "../planets/SolarExplorer";
import EarthScene from "../components/home/animation/EarthScene";

const MainRoutes = () => {
  const ROUTE = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/login",
      element: <Login />,
    },
    {
      id: 3,
      path: "/register",
      element: <Register />,
    },
    {
      id: 4,
      path: "/cards",
      element: <CardList />,
    },
    {
      id: 5,
      path: "card-create",
      element: <CardCreate />,
    },
    {
      id: 6,
      path: "card-edit",
      element: <CardEdit />,
    },
    {
      id: 7,
      path: "/map-strike",
      element: <MapStrike />,
    },
    {
      id: 5,
      path: "/brazil",
      element: <Brazil />,
    },
    {
      id: 6,
      path: "/turkey",
      element: <Turkey />,
    },
    {
      id: 7,
      path: "/kyrgyzstan",
      element: <Kyrgyzstan />,
    },
    {
      id: 8,
      path: "/russia",
      element: <Russia />,
    },
    {
      id: 9,
      path: "/planets",
      element: <SolarExplorer />,
    },
    {
      id: 10,
      path: "/sam",
      element: <EarthScene />,
    },
  ];
  return (
    <Routes>
      {ROUTE.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
