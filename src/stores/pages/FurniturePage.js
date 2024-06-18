import React from 'react'
import { furnitureData } from '../data/furniture';
import Navbar from '../components/Navbar';

export default function FurniturePage() {
  return (
    <>
    <Navbar />
    <div className="pageSection">
      {furnitureData.map((item) => {
        return (
          <div>
            <div className="pageImg">
              <img src={item.image} alt="image" />
            </div>
            <div className="proModel">
              {item.brand},{item.model}
            </div>
          </div>
        );
      })}
    </div>
  </>
    
  )
}
