import React, { useState } from "react";
import EveryThing from "./EveryThing";
import { motion } from "framer-motion";
import "../Styles/container.css";
import photos from "./photos.json";
import Tilt from "react-parallax-tilt";

const Container = () => {
  const [selected, setSelected] = useState([]);

  const [items, setItems] = useState(photos);

  const handleSelect = (ind) => {
    if (selected.includes(ind)) {
      setSelected(selected.filter((item) => item !== ind));
    } else {
      setSelected([...selected, ind]);
    }
  };

  // console.log({ selected });

  const onDelete = () => {
    setItems(items.filter((_item, ind) => !selected.includes(ind)));

    setSelected([]);
  };

  // console.log({ items });

  return (
    <div className="container">
      <div className="navbar">
        {/* -------here i use tilt for some animation.......--------- */}
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          gyroscope={true}
        >
          <span>
            {!selected.length
              ? "Gallery App"
              : selected.length === 1
              ? "1 File selected"
              : `${selected.length} Files selected`}
          </span>
        </Tilt>
        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          gyroscope={true}
        >
          {/* -------------Here i use framer motion for animation--------------- */}
          <motion.button
            style={{ display: selected.length ? "block" : "none" }}
            onClick={onDelete}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {selected.length === 1 ? "Delete File" : "Delete Files"}
          </motion.button>
        </Tilt>
      </div>
      <div className="all">
        <EveryThing
          selected={selected}
          handleSelect={handleSelect}
          items={items}
          setItems={setItems}
        />
      </div>
    </div>
  );
};

export default Container;
