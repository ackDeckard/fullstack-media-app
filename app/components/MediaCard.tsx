import React from "react";
import SmallCircle from "./SmallCircle";

const MediaCard = ({ props }) => {
  const { image, year, rating, category, title } = props;

  return (
    <div>
      <div
        className="mb-2 h-[110px] w-[164px] cursor-pointer   rounded-lg bg-bgSignInOutNavBarColor duration-300 ease-in-out hover:scale-105 md:h-[140px] md:w-[220px] lg:h-[174px] lg:w-[280px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          objectFit: "fill",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="pb-4 ">
        <div className="flex text-xs font-light text-white/75 md:text-[13px]">
          <div>{year}</div>
          <SmallCircle />
          <div>{category}</div>
          <SmallCircle />
          <div>{rating}</div>
        </div>
        <div className="text-[15px] font-medium text-white md:text-lg">
          {title}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
