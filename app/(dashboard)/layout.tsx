"use client";
import { useState } from "react";
import GetData from "../components/GetData";
import Header from "../components/Header";

const DashBoardLayout = ({ children }) => {
  const [data, setData] = useState("");

  const handleMovieData = (data: MovieProps[]) => {
    setData(data);
    console.log(data);
  };

  return (
    <div>
      <GetData handleMovieData={handleMovieData} />
      <Header />
      {children}
    </div>
  );
};

export default DashBoardLayout;
