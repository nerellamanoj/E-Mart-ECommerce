import React from 'react'
import {womanData} from "../data/woman"

export default function Woman() {
    const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
      <h2>Women's</h2>

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
    
  )
}
