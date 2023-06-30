import React from "react";
import MediaCard from "./MediaCard";

type MediaType = {
  id: string;
  title: string;
  image: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

const ShowAllMedias = ({ data }: { data: MediaType[] }) => {
  //const id = React.useId();

  console.log("show all medias", data);

  return (
    <section className=" mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => {
        if (!item.isTrending) {
          return <MediaCard key={item.id} data={item} />;
        }
        return null;
      })}
    </section>
  );
};

export default ShowAllMedias;
