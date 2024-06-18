import React from "react";
import { furnitureData } from "../data/furniture";

export default function Furnitures() {
  const firstFiveImages = furnitureData.slice(0, 5);

  return (
    <>
      <div className="protitle">
        <h2>Furnitures</h2>
      </div>

      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imageBox">
              <img className="proImage" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
