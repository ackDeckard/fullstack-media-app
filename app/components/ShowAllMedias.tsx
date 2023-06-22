import React from "react";

const ShowAllMedias = ({ data }) => {
  return (
    <section className="gap-y- mb-4 grid h-full grid-cols-2 gap-x-1">
      {data.map((item) => (
        <div key={item.title + item.year}>
          <div
            className="h-[110px] w-[164px] rounded-lg bg-white"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              objectFit: "fill",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="m-0">
            <div className="grid h-[36px]  w-[105px] grid-flow-col text-[11px] font-light text-white/75">
              <div>{item.year}</div>
              <div>{item.category}</div>
              <div>{item.rating}</div>
            </div>
            <div className="-mt-2 text-sm font-medium text-white">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShowAllMedias;
