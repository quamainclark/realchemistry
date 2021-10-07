import React, { useState, useEffect } from 'react';
import { loadImagesByTitle } from './api';
import Image from './Image';

function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getData() {
      const title = "New Jersey";
      const res = await loadImagesByTitle(title);

      if (res && res.query) {
        const { pages } = res.query;
        setImages(Object.values(pages));
      }
    }

    getData();
  }, []);

  if (!images.length) {
    return (
      <div className="loading">
        <span>loading...</span>
      </div>
    );
  }

  return (
    <div className="image-list-container">
      {images.map((image, index) => <Image key={index} image={image} />)}
    </div>
  );
}

export default ImageList;