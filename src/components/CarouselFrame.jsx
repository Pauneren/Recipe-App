import React from "react";
import Carousel from "react-elastic-carousel";
import Video from "./Video.jsx";

//receives an array of video Id strings as a prop
const CarouselFrame=({ videoIdList }) => {
  return (
    <>
      {videoIdList.length > 0 && (
        <Carousel>
          
          { // Create carousel item for each item in the video array
            videoIdList.map((videoId) => (
            //content of each carousel item is a video component
            <Video id={videoId} />
          ))}
        </Carousel>
      )}

      {videoIdList.length === 0 && <h2>No videos found!</h2>}
    </>
  );
}

export default CarouselFrame
