import React from "react";

const FilterTvSeries = ({ data }) => {
  console.log("whats cing", data);

  const moviesByCategory = data.filter((item) => item.category === "TV Series");

  return (
    <section className="grid h-screen grid-cols-2 gap-4">
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

export default FilterTvSeries;
