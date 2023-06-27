import { useRef, useState } from "react";

const ClickAndDragWithMouse = ({ className = "", children }) => {
  const ourRef = useRef();
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
      style={{ cursor: isMouseDown ? "cursor-grab" : "default" }}
    >
      {children}
    </div>
  );
};

export default ClickAndDragWithMouse;
