import Image from "next/image";
import React, { useRef, useState } from "react";

const PlayMedia = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const url =
    "https://res.cloudinary.com/djr4zsobg/video/upload/v1688151940/k03ywaqmkjw8i01z4mof.mp4";

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying((prevState) => !prevState);
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 h-[48px] w-[117px] -translate-x-1/2 -translate-y-1/2 transform rounded-[28px] bg-white/25">
      <Image
        src="/icon-play.svg"
        alt=""
        width={0}
        height={0}
        className="h-[30px] w-[30px]"
      />
      <video ref={videoRef} src={url} />
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};
export default PlayMedia;
