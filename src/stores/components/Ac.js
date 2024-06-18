import React from "react";
import { acData } from "../data/ac";

export default function Ac() {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
     <div className="protitle">
      <h2>Air Conditioners</h2>
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
