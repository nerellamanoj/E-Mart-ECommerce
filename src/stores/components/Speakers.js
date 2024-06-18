import React from "react";
import { speakerData } from "../data/speaker";

export default function () {
  const firstFiveImages = speakerData.slice(0, 5);

  return (
    <>
      <div className="protitle">
        <h2>Speakers</h2>
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
