import React from 'react'
import Navbar from '../components/Navbar';
import { watchData } from '../data/watch';
export default function WatchesPage() {
  return (
    <>
    <Navbar />
    <div className="pageSection">
      {watchData.map((item) => {
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
