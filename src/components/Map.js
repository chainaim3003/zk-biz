
import React from 'react';
import '../css/Map.css'; // Ensure this path is correct in your project structure

function Map() {
  return (
    <div className="container">
      <br></br>
      <br></br>
      {/* Heading Section */}
      <div className="heading-container">
        <h1>Our Technologies</h1>
      </div>

     

      {/* Image Section */}
      <div className="image-container">
        <div className="image-wrapper">
          <img src="/images/Slide7.JPG" alt="ZK BP" className="image-class" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2>ZK BP</h2>
          <div className="zk-zkbp">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="label"></div>
            <div className="label"></div>
          </div>
          <button className="explore-button">Explore</button>
        </div>
        
        <div className="col">
          <h2>Recursive proofs</h2>
          <div className="recursive-proofs">
            <div className="box"></div>
            <div className="label"></div>
            <div className="circle"></div>
            <div className="circle green"></div>
            <div className="line"></div>
            <div className="label">δχ</div>
          </div>
          <button className="explore-button">Explore</button>
        </div>

        <div className="col">
          <h2>MINA and CrossChains</h2>
          <div className="mina-protokit">
            <div className="box"></div>
            <div className="box"></div>
            <div className="label"></div>
            <div className="label"></div>
            <div className="label"></div>
            <div className="label"></div>
          </div>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Map;
