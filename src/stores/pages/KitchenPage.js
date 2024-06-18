import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
export default function KitchenPage() {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            kitchenData.map((item)=>{
                return(
                   <div>
                     <div className='pageImg'>
                        <img src={item.image}alt="image" />
                        </div>
                        <div className="proModel">
                            {item.type},{item.model}
                        </div>
                    </div>

                       

                )

            }) 
        } 

      
    </div>
    </>
    
  )
}
