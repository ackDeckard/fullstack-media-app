"use client";
import React, { useContext } from "react";
import TrendingItems from "./TrendingItems";
import ShowAllMedias from "./ShowAllMedias";
import { DataContext } from "../context/DataFetchingContext";
import FilterMedia from "./FilterMedia";

type PropsType = {
  showTrendingItems: boolean;
  showMoviesByCategory: boolean;
  showTvSeries: boolean;
  showAll: boolean;
  showBookMarked: boolean;
  filterType?: string;
};

const GetData = ({
  showTrendingItems,
  showMoviesByCategory,
  showTvSeries,
  showAll,
  showBookMarked,
  filterType,
}: PropsType) => {
  const { retrievedData } = useContext(DataContext);

  return (
    <div>
      {showTrendingItems && <TrendingItems data={retrievedData} />}
      {showAll && <ShowAllMedias data={retrievedData} />}
      {showMoviesByCategory && (
        <FilterMedia data={retrievedData} filterType={"Movie"} />
      )}
      {showTvSeries && (
        <FilterMedia data={retrievedData} filterType={"TV Series"} />
      )}
      {showBookMarked && (
        <FilterMedia data={retrievedData} filterType={"Bookmarked"} />
      )}
    </div>
  );
};

export default GetData;
