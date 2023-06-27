"use client";
import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import TrendingItems from "./TrendingItems";
import FilterMovies from "./FilterMovies";
import ShowAllMedias from "./ShowAllMedias";
import FilterTvSeries from "./FilterTvSeries";

type PropsType = {
  showTrendingItems: boolean;
  showMoviesByCategory: boolean;
  showTvSeries: boolean;
  showAll: boolean;
};

const GetData = ({
  showTrendingItems,
  showMoviesByCategory,
  showTvSeries,
  showAll,
}: PropsType) => {
  const [retrievedData, setRetrievedData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      console.log("How many times im here");

      const getMovieData = async () => {
        try {
          const timeTrackingCollectionRef = collection(database, "items");
          const data = await getDocs(timeTrackingCollectionRef);
          const filteredData = data.docs.map((doc) => doc.data());
          if (filteredData) setRetrievedData(filteredData);
          setIsDataFetched(true);
        } catch (error) {
          console.error(error);
        }
      };
      getMovieData();
    }
  }, []);

  return (
    <div className="h-full">
      {showTrendingItems && <TrendingItems data={retrievedData} />}
      {showMoviesByCategory && <FilterMovies data={retrievedData} />}
      {showTvSeries && <FilterTvSeries data={retrievedData} />}
      {showAll && <ShowAllMedias data={retrievedData} />}
    </div>
  );
};

export default GetData;
