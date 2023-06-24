import React, { useRef, useState } from "react";
import SmallCircle from "@/app/components/SmallCircle";

const ClickAndDragWithMouse = ({ className = "", children }) => {
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const handleDragStart = (e) => {
    const slider = ourRef.current?.children[0];
    if (!slider) return;
    const { offsetLeft, offsetTop, scrollLeft, scrollTop } = slider;
    const startX = e.pageX - offsetLeft;
    const startY = e.pageY - offsetTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    document.body.style.cursor = "default";
  };

  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    if (!slider) return;
    const { offsetLeft, offsetTop } = slider;
    const x = e.pageX - offsetLeft;
    const y = e.pageY - offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={className}
      style={{ cursor: isMouseDown ? "grabbing" : "default" }}
    >
      {children}
    </div>
  );
};

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

const TrendingItems = ({ data }: PropsType) => {
  const trendingItems = data.filter((item) => item.isTrending);
  const journalRef = useRef(null);

  const id = React.useId();

  return (
    <ClickAndDragWithMouse className={"drag"} innerRef={journalRef}>
      <section className="grid h-[160px]  grid-flow-col gap-4 overflow-x-scroll  rounded-lg md:h-[260px]">
        {trendingItems.map((item) => (
          <div
            key={id + item.title}
            className="h-[140px] w-[240px] cursor-[grab] rounded-lg  bg-bgSignInOutNavBarColor duration-300 ease-in-out hover:scale-105 md:h-[230px] md:w-[470px]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              objectFit: "fill",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="grid h-full grid-rows-[1fr_min-content]">
              <div />
              <div className="pb-4 pl-4">
                <div className="flex text-xs font-light text-white/75">
                  <div>{item.year}</div>
                  <SmallCircle />
                  <div>{item.category}</div>
                  <SmallCircle />
                  <div>{item.rating}</div>
                </div>
                <div className="text-[15px] font-medium text-white">
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
