import React, { useState } from 'react'
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Basic.scss';

export default function Calculator() {

  const [ jsonData, setJsonData ] = useState("");

  const setJson = (event) => {
    var json = event.target.value;
    try {
      var data = JSON.parse(json);
      setJsonData(data);
    }catch (e) {
      alert("Error parsing JSON");
      event.target.value = "";
    }
  }

  return (
    <div className="container calculator">
      <label className="container__viewOperation"></label>
      <div className="container__actions mb-2">
        <div className="container__buttonsNumber">
          <div className="container__buttonsItem">
            <button type="button" class="btn btn-primary m-1">9</button>
            <button type="button" class="btn btn-primary m-1">8</button>
            <button type="button" class="btn btn-primary m-1">7</button>
          </div>
          <div className="container__buttonsItem">
            <button type="button" class="btn btn-primary m-1">6</button>
            <button type="button" class="btn btn-primary m-1">5</button>
            <button type="button" class="btn btn-primary m-1">4</button>
          </div>
          <div className="container__buttonsItem">
            <button type="button" class="btn btn-primary m-1">3</button>
            <button type="button" class="btn btn-primary m-1">2</button>
            <button type="button" class="btn btn-primary m-1">1</button>
          </div>
        </div>
        <div className="container__buttons"></div>
      </div>
    </div>
  )
}
