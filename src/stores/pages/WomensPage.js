import React from 'react'
import Navbar from '../components/Navbar';
import { womanData } from '../data/woman';

export default function WomensPage() {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {womanData.map((item) => {
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
