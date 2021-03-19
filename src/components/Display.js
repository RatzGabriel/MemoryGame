import React from "react";

const Display = ({ updateImages, images, item }) => {
  const onClickSubmit = (e) => {
    updateImages(item);
  };

  return (
    <div
      onClick={(e) => {
        onClickSubmit(e);
      }}
    >
      <img src={images[item].url} alt="noImg" key={item} />
    </div>
  );
};

export default Display;
