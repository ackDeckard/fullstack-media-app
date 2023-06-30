"use client";
import MediaCard from "@/app/components/MediaCard";
import { DataContext } from "@/app/context/DataFetchingContext";
import React, { useContext } from "react";

const SearchPage = () => {
  const { filteredData } = useContext(DataContext);
  const id = React.useId();

  return (
    <div className="grid h-screen grid-rows-[min-content_1fr]  overflow-y-auto bg-backgroundColor pl-4">
      <div className="mb-[25px] text-xl font-light text-white md:text-[32px]">
        Found {filteredData.length}{" "}
        {filteredData.length === 1 ? "result" : "results"}{" "}
      </div>
      <section className="grid h-full grid-cols-2 gap-8 bg-backgroundColor md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((item) => {
          return <MediaCard key={id + item.title} {...item} />;
        })}
      </section>
    </div>
  );
};

export default SearchPage;
