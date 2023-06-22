import React from "react";

const FilterMovies = ({ data }) => {
  const moviesByCategory = data.filter((item) => item.category === "Movie");

  return (
    <section className="grid h-full grid-cols-2 gap-4">
      {moviesByCategory.map((item) => (
        <div
          key={item.title + item.year}
          className="h-[110px] w-[164px] bg-white"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          {item.title}
        </div>
      ))}
    </section>
  );
};

export default FilterMovies;
