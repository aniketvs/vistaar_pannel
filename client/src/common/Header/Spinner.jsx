// src/components/Loader.js
import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center mt-5">
      <h2>Loading...</h2>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
