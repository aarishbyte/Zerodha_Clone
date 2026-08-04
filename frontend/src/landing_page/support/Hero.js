import React from "react";

function Hero() {
  return (
  <section className="container-fluid pb-5" id="supportHero" style={{ backgroundColor: "rgb(56, 126, 209)", color: "white" }}>
    
    {/* 1. Header Navigation */}
    <div className="d-flex justify-content-between align-items-center mx-auto" style={{ maxWidth: "1200px", padding: "30px 20px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
      <h4 className="fs-5 fw-medium m-0">Support Portal</h4>
      <a href="/" className="text-white text-decoration-underline fs-6">Track Tickets</a>
    </div>

    {/* 2. Main Content Grid */}
    <div className="row mx-auto mt-5 pt-2" style={{ maxWidth: "1200px", padding: "0 20px" }}>
      
      {/* Left Column: Search & Tags */}
      <div className="col-md-7 pe-md-5">
        <h1 className="fs-3 fw-normal lh-base mb-4" style={{ maxWidth: "500px" }}>
          Search for an answer or browse help topics to create a ticket
        </h1>
        <input 
          className="form-control mb-3 fs-6" 
          placeholder="E.g: how do i activate F&O, why is my order getting rejected." 
          style={{ padding: "15px 20px", borderRadius: "4px" }}
        />
        <div className="d-flex flex-wrap gap-3">
          <a href="/" className="text-white text-decoration-underline fs-6 opacity-75 hover-opacity-100">Track account opening</a>
          <a href="/" className="text-white text-decoration-underline fs-6 opacity-75 hover-opacity-100">Track segment activation</a>
          <a href="/" className="text-white text-decoration-underline fs-6 opacity-75 hover-opacity-100">Intraday margins</a>
          <a href="/" className="text-white text-decoration-underline fs-6 opacity-75 hover-opacity-100">Kite user manual</a>
        </div>
      </div>

      {/* Right Column: Featured */}
      <div className="col-md-5 ps-md-5 mt-5 mt-md-0">
        <h2 className="fs-4 fw-normal mb-4">Featured</h2>
        <ol className="lh-lg ps-3 fs-6">
          <li className="mb-2">
            <a href="/" className="text-white text-decoration-underline">Current Takeovers and Delisting-January 2025</a>
          </li>
          <li>
            <a href="/" className="text-white text-decoration-underline">Latest Intraday leverages - MIS & CO</a>
          </li>
        </ol>
      </div>

    </div>
  </section>
);
}

export default Hero;
