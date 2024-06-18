import React from 'react'
import Navbar from '../components/Navbar';
import { fridgeData } from '../data/fridge';
export default function FridgesPage() {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {fridgeData.map((item) => {
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
