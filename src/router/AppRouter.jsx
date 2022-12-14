import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ArtistDetail from "../pages/ArtistDetail";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artistDetail/:name" element={<ArtistDetail />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
