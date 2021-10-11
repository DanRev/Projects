import React, { useState } from 'react';
import $ from "jquery";
import ImageStar from "../resources/starPic.jpg";
import ArrowUp from "../resources/arrow-up.svg";
import ArrowDown from "../resources/arrow-down.svg";
import ArrowLeft from "../resources/arrow-left.svg";
import ArrowRight from "../resources/arrow-right.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Basic.scss';

const Flipimage = () => {

  const [ rotateNumber, setRotateNumber ] = useState(0);

  const rotateImage = (event, type) => {
    var image = $(".container__imageStar");
    switch (type) {
      case "up":
          setRotateNumber(360);
          var upNumber = 360;
          image.css({transform: "rotate("+upNumber+"deg)"});
        break;
  
      case "down":
          var downNumber = 180;
          setRotateNumber(180);
          image.css({transform: "rotate("+downNumber+"deg)"});
        break;
        
      case "left":
          var operation = rotateNumber - 90
          setRotateNumber(rotateNumber - 90);
          image.css({transform: "rotate("+operation+"deg)"});
        break;
        
      case "right":
          var otherOperation = rotateNumber + 90;
          setRotateNumber(rotateNumber + 90);
          image.css({transform: "rotate("+otherOperation+"deg)"});
        break;  
  
      default:
        console.log("default case");
        break;
    }
  }

  return (
    <div className="container container__display">
      <div className="container__imageContainer">
        <img className="container__imageStar" src={ImageStar} alt="StarImage" />
      </div>
      <div className="container__arrowsContainer">
        <div className="container__arrow">
          <img className="container__image up" src={ArrowUp} alt="ArrowUp" onClick={(e)=>{rotateImage(e,"up")}} />
          <img className="container__image down" src={ArrowDown} alt="ArrowDown" onClick={(e)=>{rotateImage(e,"down")}} />
        </div>
        <div className="container__arrow--left">
          <img className="container__image left" src={ArrowLeft} alt="ArrowLeft" onClick={(e)=>{rotateImage(e,"left")}} />
          <img className="container__image right" src={ArrowRight} alt="ArrowRight" onClick={(e)=>{rotateImage(e,"right")}} />
        </div>
      </div>
    </div>
  );
}

export default Flipimage;