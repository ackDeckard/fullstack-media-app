"use client";
import MediaCard from "@/app/components/MediaCard";
import { DataContext } from "@/app/context/DataFetchingContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const SearchPage = () => {
  const { filteredData } = useContext(DataContext);
  const id = React.useId();

  console.log("What did come from ", filteredData);

  return (
    <>
      <section className="mb-4 grid h-screen grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((item) => {
          return <MediaCard key={id + item.title} props={item} />;
        })}
      </section>
    </>
  );
};

export default SearchPage;
