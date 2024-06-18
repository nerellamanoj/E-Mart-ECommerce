import React from 'react'

import {menData} from "../data/men"

export default function Mens() {
    const firstFiveImages = menData.slice(0, 5);

  return (
    <>
    <div className="protitle">
      <h2>Mens's</h2>
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


    
  )
}
