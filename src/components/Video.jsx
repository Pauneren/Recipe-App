import React from "react";


//gets youtube video id as props
const Video=({ selectedVideoId }) => {
  return (
    <div className='youtube'>
      <iframe
        title={`VideoId: ${selectedVideoId}`}
        width='672'
        height='378'
        src={`https://www.youtube.com/embed/${selectedVideoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video
