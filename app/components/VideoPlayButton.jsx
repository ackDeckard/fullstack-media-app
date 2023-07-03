"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import StartVideo from "./StartVideo";

const VideoPlayButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div
      onClick={toggleDialog}
      className="flex h-[20px] w-[77px] items-center justify-between rounded-[28px] bg-white/25 px-4 hover:cursor-pointer md:h-[48px] md:w-[117px]"
    >
      <Image
        src="/icon-play.svg"
        alt=""
        width={0}
        height={0}
        className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]"
      />

      <button className="text-xs text-white md:text-lg">
        {isDialogOpen ? "Pause" : "Play"}
      </button>
      {isDialogOpen && (
        <StartVideo
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </div>
  );
};
export default VideoPlayButton;
