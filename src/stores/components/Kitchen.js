import React from "react";
import { kitchenData } from "../data/kitchen";

export default function Kitchen() {
  const firstFiveImages = kitchenData.slice(0, 5);
  return (
    <>
      <div className="protitle">
        <h2>Kitchen</h2>
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
