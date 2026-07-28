import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return(
    <div className="container mt-5" style={{marginLeft:"100px"}}>
      <div className="row align-items-center" >
        
        
        <div className="col-5 p-5 ">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-4 p-4">
          <img src={imageURL}
          style={{width: "150%"}}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
