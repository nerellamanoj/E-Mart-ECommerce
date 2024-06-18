import React from "react";
import { computerData } from "../data/computers";

export default function Computers() {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
       <div className="protitle">
             <h2>Computers</h2>      
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
