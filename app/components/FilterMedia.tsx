import React, { ReactNode } from "react";
import MediaCard from "./MediaCard";

type MediaType = {
  id: string;
  title: string;
  image: string;
  year: ReactNode;
  category: string;
  rating: ReactNode;
  isBookmarked: boolean;
  isTrending: boolean;
  filterType?: string;
};

type PropsType = {
  data: MediaType[];
  filterType?: string;
};

const FilterMedia = ({ data, filterType }: PropsType) => {
  let filteredData: MediaType[] = [];

  if (filterType === "TV Series") {
    filteredData = data.filter((item) => item.category === "TV Series");
  }

  if (filterType === "Movie") {
    filteredData = data.filter((item) => item.category === "Movie");
  }

  if (filterType === "Bookmarked") {
    filteredData = data.filter((item) => item.isBookmarked);
  }

  return (
    <section className=" mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredData.map((item) => (
        <MediaCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default FilterMedia;
