import React from "react";

export default function Video({ id }) {
  return (
    <div className='youtube'>
      <iframe
<<<<<<< HEAD
=======
        title={`${id}`}
>>>>>>> e66f94ec05f75b44ec865505c3b980022cfe8cb3
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}
