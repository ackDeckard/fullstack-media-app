import React from "react";

const TrendingItems = ({ data }) => {
  const trendingItems = data.filter((item) => item.isTrending);

  return (
    <section className="grid h-[140px] grid-flow-col gap-4 overflow-x-scroll">
      {trendingItems.map((item) => (
        <div
          key={item.title + item.year}
          className="h-[200px] w-[320px] bg-white"
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

export default TrendingItems;
