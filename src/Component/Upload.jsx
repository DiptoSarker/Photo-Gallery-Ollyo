import "../Styles/upload.css";
import React from "react";
import { GrGallery } from "react-icons/gr";
import { motion } from "framer-motion";

const Upload = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      class="upload-image-container"
    >
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
    </motion.div>
  );
};

export default Upload;
