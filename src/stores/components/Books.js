import React from 'react'
import {booksData} from "../data/books"

export default function 
() {
    const firstFiveImages = booksData.slice(0, 5);
  return (
    <>
    <div className="protitle">
      <h2>Books</h2>
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
