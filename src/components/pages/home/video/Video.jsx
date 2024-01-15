import React from "react";

const Video = () => {
  return (
    <div className="w-full flex justify-center py-14 px-5">
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/pvaooclf9sk?si=-i876iljZf-c3h9l"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="rounded"
      ></iframe>
    </div>
  );
};

export default Video;
