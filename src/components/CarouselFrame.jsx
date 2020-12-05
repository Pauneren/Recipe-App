import React from "react";
import Carousel from "react-elastic-carousel";
import Video from "./Video.jsx";

export default function CarouselFrame({ videoIdList }) {
  return (
    <>
      {videoIdList.length > 0 && (
        <Carousel>
          {videoIdList.map((videoId) => (
            <Video id={videoId} />
          ))}
        </Carousel>
      )}

      {videoIdList.length === 0 && <h2>No videos found!</h2>}
    </>
  );
}
