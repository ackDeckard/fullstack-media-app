import React from "react";
import SmallCircle from "./SmallCircle";

const mediaItems = [
  {
    title: "Beyond Earth",
    image: "steam.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
];

const MediaCard = () => {
  //const mediaItems = props;
  const id = React.useId();

  return (
    <>
      {mediaItems.map((item) => (
        <div key={id + item.title} className="">
          <div
            className="mb-2 h-[110px] w-[164px] cursor-pointer   rounded-lg bg-bgSignInOutNavBarColor duration-300 ease-in-out hover:scale-105 md:h-[140px] md:w-[220px] lg:h-[174px] lg:w-[280px]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              objectFit: "fill",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="pb-4 ">
            <div className="flex text-xs font-light text-white/75 md:text-[13px]">
              <div>{item.year}</div>
              <SmallCircle />
              <div>{item.category}</div>
              <SmallCircle />
              <div>{item.rating}</div>
            </div>
            <div className="text-[15px] font-medium text-white md:text-lg">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MediaCard;
