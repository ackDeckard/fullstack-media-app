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
      className="flex h-[48px] w-[117px] items-center justify-between rounded-[28px] bg-white/25 px-4 hover:cursor-pointer"
    >
      <Image
        src="/icon-play.svg"
        alt=""
        width={0}
        height={0}
        className="h-[30px] w-[30px]"
      />

      <button>{isDialogOpen ? "Pause" : "Play"}</button>
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
