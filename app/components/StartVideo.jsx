import { useEffect, useRef, useState } from "react";

const StartVideo = ({ isDialogOpen, setIsDialogOpen }) => {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const url =
    "https://res.cloudinary.com/djr4zsobg/video/upload/v1688151940/k03ywaqmkjw8i01z4mof.mp4";

  const handleClick = () => {
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleMouseLeave = (event) => {
    const isInsideDialog = dialogRef.current.contains(event.target);
    if (!isInsideDialog) {
      const video = videoRef.current;
      if (video && !video.paused) {
        video.pause();
        setIsPlaying(false);
      }
      setIsDialogOpen(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnded);
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="absolute z-50 grid h-[110px] w-[164px] place-items-center rounded-xl md:h-[140px] md:w-[220px] lg:h-[174px] lg:w-[280px]"
    >
      <video
        ref={videoRef}
        src={url}
        className="absolute h-full w-full overflow-hidden rounded-xl "
        autoPlay
        controls
        muted
      />
    </dialog>
  );
};

export default StartVideo;
