import React, { useRef, useState } from "react";
import SmallCircle from "@/app/components/SmallCircle";
import ClickAndDragWithMouse from "./ClickAndDragWithMouse";
import ClickAndBookMark from "./ClickAndBookmark";
import VideoPlayButton from "./VideoPlayButton";

type MediaType = {
  id: string;
  title: string;
  image: string;
  year: React.ReactNode;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

type PropsType = {
  data: MediaType[];
};

const TrendingItems = ({ data }: PropsType) => {
  const trendingItems = data.filter((item) => item.isTrending);
  const journalRef = useRef(null);

  const id = React.useId();

  return (
    <ClickAndDragWithMouse>
      <section className="grid h-[160px] grid-flow-col gap-4 overflow-x-auto  rounded-lg md:h-[260px]">
        {trendingItems.map((item) => (
          <div
            key={id + item.title}
            className=" relative h-[140px] w-[240px]  cursor-[grab] rounded-lg bg-bgSignInOutNavBarColor duration-300 ease-in-out hover:scale-105 md:h-[230px] md:w-[470px] [&>*:first-child]:invisible [&>*:first-child]:hover:visible [&>*:first-child]:hover:duration-1000"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              objectFit: "fill",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute">
              <div className="grid h-[140px] w-[240px] place-items-center md:h-[230px]  md:w-[470px]">
                {item.category === "Movie" ? <VideoPlayButton /> : ""}
              </div>
            </div>
            <ClickAndBookMark id={item.id} isBookmarked={item.isBookmarked} />
            <div className="grid h-full grid-rows-[1fr_min-content]">
              <div />
              <div className="pb-4 pl-4">
                <div className="flex text-xs font-light text-white/75 md:text-[15px]">
                  <div>{item.year}</div>
                  <SmallCircle />
                  <div>{item.category}</div>
                  <SmallCircle />
                  <div>{item.rating}</div>
                </div>
                <div className="text-[15px] font-medium text-white md:text-2xl">
                  {item.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </ClickAndDragWithMouse>
  );
};

export default TrendingItems;
