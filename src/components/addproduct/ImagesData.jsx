import React, { useState } from 'react';
import config from '../../config.json';

const API_URL = config.PRODUCT_API_URL;

const ImagesData = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);
    fetch(`${API_URL}/products/upload-image`, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        console.log('Image uploaded successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSave}>Save Image</button>
    </div>
  );
};

export default ImagesData;
