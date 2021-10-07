import React from 'react';
import PropTypes from 'prop-types';

function Image({ image }) {
  const { imageinfo, title } = image;

  const openImage = () => {
    if (imageinfo[0] && imageinfo[0].url) {
      window.open(imageinfo[0] && imageinfo[0].url, "_blank");
    }
  }

  return (
    <div className="image-container" onClick={openImage}>
      <img src={imageinfo[0] && imageinfo[0].url} alt={title && title.replace("File:", "")} />
      <div className="image-info">
        <span>{imageinfo[0] ? imageinfo[0].user : ""}</span>
      </div>
    </div>
  );
}

Image.protoTypes = {
  image: PropTypes.object,
}

export default Image;