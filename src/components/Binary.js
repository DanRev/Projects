import React, { useEffect , useState } from 'react';
import { calculateBinaryNumber } from "../functions/functionalities";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Basic.scss';

const Basic = () => {

  const [bin, setBin] = useState(0);
  const [dec, setDec] = useState(0);

  const setNumber = (event) => {
    var number = parseInt(event.target.value);
    if (event.nativeEvent.data>=0 && event.nativeEvent.data<=1){
      setBin(number);
    }else{
      var length = event.target.value.length
      event.target.value = event.target.value.substr(0,length-1);
      alert("Only number 0 and 1");
    }
  }

  useEffect(() => {
    $(".container").children().css("margin-bottom","1em");
  });

  return (
    <div className="container">
      <label>Enter Binary Number</label>
      <input placeholder='Enter Number' onChange={(e)=>{setNumber(e)}}/>
      <button type="button" className="btn btn-primary" onClick={()=>{setDec(calculateBinaryNumber(bin))}}>Calculate</button>
      <label className="container__result">Numero Binario: {dec}</label>
    </div>
  );
}

export default Basic;
