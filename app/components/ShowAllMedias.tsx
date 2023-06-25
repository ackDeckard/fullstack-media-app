import React from "react";
import MediaCard from "./MediaCard";

type MediaType = {
  title: String;
  image: String;
  year: React.ReactNode;
  category: String;
  rating: String;
  isBookmarked: boolean;
  isTrending: boolean;
};

type PropsType = {
  data: MediaType[];
};

const ShowAllMedias = ({ data }: PropsType) => {
  const id = React.useId();

  return (
    // <section className="mb-4 grid grid-cols-2 gap-x-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
    <section className=" mb-4 md:grid md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <MediaCard key={id + item.title} />
      ))}
    </section>
  );
};

export default ShowAllMedias;
