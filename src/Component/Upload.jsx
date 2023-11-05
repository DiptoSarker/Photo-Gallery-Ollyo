import "../Styles/upload.css";
import React from "react";
import { GrGallery } from "react-icons/gr";

const Upload = () => {
  return (
    <div class="upload-image-container">
      <label for="image-upload" class="upload-label">
        <GrGallery class="upload-logo" />
        <span> Add Images</span>
      </label>

      <input
        type="file"
        id="image-upload"
        accept="image/*"
        class="upload-input"
      />
    </div>
  );
};

export default Upload;
