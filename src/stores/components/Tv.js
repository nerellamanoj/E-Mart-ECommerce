import React from 'react'

import {tvData} from "../data/tv"

export default function Tv() {
    const firstFiveImages=tvData.slice(0,5)
  return (
    <>
    <div className="protitle">
      <h2>TV</h2>
      
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
