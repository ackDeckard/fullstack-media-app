"use client";
import { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";

const GetData = async ({ handleMovieData }) => {
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const timeTrackingCollectionRef = collection(database, "items");
        const data = await getDocs(timeTrackingCollectionRef);
        const filteredData = data.docs.map((doc: QueryDocumentSnapshot) =>
          doc.data()
        );
        handleMovieData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieData();
  }, []);
};

export default GetData;
