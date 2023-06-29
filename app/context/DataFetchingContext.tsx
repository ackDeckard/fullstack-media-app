"use client";
import React, { createContext, useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

type PropsType = {
  children: React.ReactNode;
};

type DataContextType = {
  retrievedData: any[];
  filteredData: any[];
  updateData: (updatedItem: any) => void;
  updateFilteredData: (filteredData: any[]) => void;
};

export const DataContext = createContext<DataContextType>({
  retrievedData: [],
  filteredData: [],
  updateData: () => {},
  updateFilteredData: () => {},
});

export const DataFetchingProvider = ({ children }: PropsType) => {
  const [retrievedData, setRetrievedData] = useState<any[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (!isDataFetched) {
      const getMediaItems = async () => {
        try {
          const timeTrackingCollectionRef = collection(database, "items");
          const data = await getDocs(timeTrackingCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          if (filteredData) setRetrievedData(filteredData);
          setIsDataFetched(true);
        } catch (error) {
          console.error(error);
        }
      };
      getMediaItems();
    }
  }, []);

  const updateData = (updatedItem: any) => {
    setRetrievedData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      return updatedData;
    });
  };

  const updateFilteredData = (filteredData: any[]) => {
    setFilteredData(filteredData);
  };

  return (
    <DataContext.Provider
      value={{ retrievedData, filteredData, updateData, updateFilteredData }}
    >
      {children}
    </DataContext.Provider>
  );
};
