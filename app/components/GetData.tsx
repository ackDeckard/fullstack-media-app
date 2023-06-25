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

const Data = [
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
];

const GetData = ({
  showTrendingItems,
  showMoviesByCategory,
  showTvSeries,
  showAll,
}: PropsType) => {
  const [retrievedData, setRetrievedData] = useState(Data);
  const [isDataFetched, setIsDataFetched] = useState(false);

  console.log("got data", retrievedData);

  // useEffect(() => {
  //   if (!isDataFetched) {
  //     const getMovieData = async () => {
  //       try {
  //         const timeTrackingCollectionRef = collection(database, "items");
  //         const data = await getDocs(timeTrackingCollectionRef);
  //         const filteredData = data.docs.map((doc) => doc.data());
  //         if (filteredData) setRetrievedData(filteredData);
  //         setIsDataFetched(true);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     getMovieData();
  //   }
  // }, [isDataFetched]);

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
