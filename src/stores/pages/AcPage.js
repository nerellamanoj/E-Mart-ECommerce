import React from "react";
import { acData } from "../data/ac";
import Navbar from "../components/Navbar";

export default function AcPage() {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {acData.map((item) => {
          return (
            <div>
              <div className="pageImg">
                <img src={item.image} alt="image" />
              </div>
              <div className="proModel">
                {item.company},{item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
