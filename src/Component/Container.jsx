import React, { useState } from "react";
import EveryThing from "./EveryThing";
import "../Styles/container.css";
import photos from "./photos.json";

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

  console.log({ selected });

  const onDelete = () => {
    setItems(items.filter((_item, ind) => !selected.includes(ind)));

    setSelected([]);
  };

  console.log({ items });

  return (
    <div className="container">
      <div className="navbar">
        <span>
          {!selected.length
            ? "Gallery"
            : selected.length === 1
            ? "1 item selected"
            : `${selected.length} items selected`}
        </span>
        <button disabled={!selected.length} onClick={onDelete}>
          Delete
        </button>
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
