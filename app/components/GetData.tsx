"use client";
import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import TrendingItems from "./TrendingItems";
import FilterMovies from "./FilterMovies";

const GetData = ({ showTrendingItems, showMoviesByCategory }) => {
  const [retrievedData, setRetrievedData] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const timeTrackingCollectionRef = collection(database, "items");
        const data = await getDocs(timeTrackingCollectionRef);
        const filteredData = data.docs.map((doc) => doc.data());
        setRetrievedData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieData();
  }, []);

  return (
    <div className="h-full">
      {showTrendingItems && <TrendingItems data={retrievedData} />}
      {showMoviesByCategory && <FilterMovies data={retrievedData} />}
    </div>
  );
};

export default GetData;
