import React from "react";
import Navbar from "../components/Navbar";
import { computerData } from "../data/computers";

export default function ComputersPage() {
  return (
    
    <>
      <Navbar />
      <div className="pageSection">
        {computerData.map((item) => {
          return (
            <div>
              <div className="pageImg">
                <img src={item.image} alt="manoj" />
              </div>
              <div className="proModel">
                {item.model},{item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
