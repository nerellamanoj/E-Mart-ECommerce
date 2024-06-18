import React from "react";
import { fridgeData } from "../data/./fridge";
export default function Fridge() {
  const firstFiveImages = fridgeData.slice(0, 5);
  return (
    <>
      <div className="protitle">
        <h2>Fridges</h2>
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
