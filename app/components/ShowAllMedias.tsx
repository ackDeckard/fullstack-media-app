import React from "react";

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
    <section className="gap-y- mb-4 grid h-full grid-cols-2 gap-x-1">
      {data.map((item) => (
        <div key={id + item.title}>
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
