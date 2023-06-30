import React, { ReactNode } from "react";
import SmallCircle from "./SmallCircle";
import ClickAndBookMark from "./ClickAndBookmark";

type PropsType = {
  data: {
    id: string;
    image: string;
    year: ReactNode;
    rating: ReactNode;
    category: string;
    title: string;
    isBookmarked: boolean;
  };
};

const MediaCard = ({ data }: PropsType) => {
  const { id, image, year, rating, category, title, isBookmarked } = data;

  console.log("a imagem", image);

  return (
    <div>
      <div
        className="relative mb-2 h-[110px] w-[164px] rounded-lg bg-bgSignInOutNavBarColor duration-300 ease-in-out hover:scale-105 md:h-[140px] md:w-[220px] lg:h-[174px] lg:w-[280px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          objectFit: "fill",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ClickAndBookMark id={id} isBookmarked={isBookmarked} />
      </div>

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
