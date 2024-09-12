// src/components/Image.js
import React from 'react';
import './Images.css'; // Import the Images CSS file

const Image = ({ src, onClick }) => {
  return (
    <div className="image" onClick={onClick}>
      <img src={src} alt="" />
    </div>
  );
};

export default Images;
