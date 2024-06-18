import React from "react";
import { menData } from "../data/men";
import Navbar from "../components/Navbar";

export default function MensPage() {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {menData.map((item) => {
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
  );
}
