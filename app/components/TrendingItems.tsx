import { React, useRef, useState } from "react";

const Draggable = ({ rootClass = "", children }) => {
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const handleDragStart = (e) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
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
      className={rootClass}
    >
      {children}
    </div>
  );
};

const TrendingItems = ({ data }) => {
  const trendingItems = data.filter((item) => item.isTrending);
  const journalRef = useRef(null);

  return (
    <Draggable innerRef={journalRef} rootClass={"drag"}>
      <section className="grid h-[160px]  grid-flow-col gap-4 overflow-x-scroll  rounded-lg md:h-[260px]">
        {trendingItems.map((item) => (
          <div
            key={item.title + item.year}
            className="h-[140px] w-[240px] rounded-lg bg-bgSignInOutNavBarColor  duration-300 ease-in-out hover:scale-105 md:h-[230px] md:w-[470px] "
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              objectFit: "fill",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {item.title}
          </div>
        ))}
      </section>
    </Draggable>
  );
};

export default TrendingItems;
