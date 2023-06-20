"use client";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../firebase/firebase";

const AddDataFirebase = () => {
  // const [item, setitem] = useState();

  const AddItems = async (e) => {
    e.preventDefault();

    async (item) => {
      await addDoc(collection(database, "items"), {
        title: item.title,
        image: item.image,
        year: item.year,
        category: item.category,
        rating: item.rating,
        isBookmarked: item.isBookmarked,
        isTrending: item.isTrending,
      });
    };
  };

  return (
    <div className="h-10 bg-white">
      <button onClick={AddItems}>Send data</button>
    </div>
  );
};

export default AddDataFirebase;
