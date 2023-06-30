"use client";
import MediaCard from "@/app/components/MediaCard";
import { DataContext } from "@/app/context/DataFetchingContext";
import Image from "next/image";
import React, { useContext } from "react";

const BookMarks = () => {
  const { retrievedData } = useContext(DataContext);
  //const id = React.useId();

  const bookmarkedMovies = retrievedData.filter(
    (item) => item.category === "Movie" && item.isBookmarked
  );
  const bookmarkedTVSeries = retrievedData.filter(
    (item) => item.category === "TV Series" && item.isBookmarked
  );

  return (
    <section className="h-screen bg-backgroundColor pl-4 text-xl  lg:col-start-2">
      {bookmarkedMovies.length === 0 && bookmarkedTVSeries.length === 0 && (
        <div className="text-white">
          No media added to the bookmarks. You can add a bookmark by clicking in
          the{" "}
          <Image
            src="icon-nav-bookmark.svg"
            alt=""
            width={16}
            height={16}
            className="inline"
          />{" "}
          icon
        </div>
      )}
      {bookmarkedMovies.length > 0 && (
        <div className="mb-[25px] text-white">
          {bookmarkedMovies.length > 1
            ? "Bookmarked Movies"
            : "Bookmarked Movie"}
        </div>
      )}
      <article className="grid grid-cols-2 gap-8 bg-backgroundColor md:grid-cols-3 lg:grid-cols-4">
        {bookmarkedMovies.map((item) => {
          return <MediaCard key={item.id} {...item} />;
        })}
      </article>

      {bookmarkedTVSeries.length > 0 && (
        <div className="mb-[25px] text-white">
          {bookmarkedTVSeries.length > 1
            ? "Bookmarked TV Series"
            : "Bookmarked TV Serie"}
        </div>
      )}
      <article className="grid grid-cols-2 gap-8 bg-backgroundColor md:grid-cols-3 lg:grid-cols-4">
        {bookmarkedTVSeries.map((item) => {
          return <MediaCard key={item.id} {...item} />;
        })}
      </article>
    </section>
  );
};

export default BookMarks;
