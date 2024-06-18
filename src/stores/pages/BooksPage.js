import React from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'

export default function 
() {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {
            booksData.map((item)=>{
                return(
                   <div>
                     <div className='pageImg'>
                        <img src={item.image}alt="image" />
                        </div>
                        <div className="proModel">
                            {item.title},{item.category}
                        </div>
                    </div>

                       

                )

            }) 
        } 

      
    </div>
    </>
  )
}
