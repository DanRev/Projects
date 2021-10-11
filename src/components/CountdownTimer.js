import React, { useState } from 'react'
import moment from 'moment';
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Basic.scss';

export default function CountdownTimer() {

  const [ days , setDay ] = useState(undefined);
  const [ hours, setHours ] = useState(undefined);
  const [ minutes, setMinutes ] = useState(undefined);
  const [ seconds, setSeconds ] = useState(undefined);
  const [ interval, setNewInterval ] = useState(undefined);
  const arrayContent = ["Days" ,"Hours" ,"Minutes" ,"Seconds" ];

  const initCountdown = (event) => {
    var eventName = $(".input-eventName");
    var eventDate = $(".input-eventNameDate");
    if (!(eventDate.val()!=="" && eventName.val()!=="")) {
      alert("All fields must be filled");
    }else{
      setNewInterval(setInterval(() =>{
        const then = moment(eventDate.val(), "YYYY-MM-DD");
        const now = moment();
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');

        setDay(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      },1000))
    }
  }

  const clearCountdown = (event) => {
    clearInterval(interval);
    var tags = $(".container__time");
    for (var i = 0; i < tags.length; i++) {
      tags[i].innerHTML = arrayContent[i];
    }
  }

  return (
    <div className="container">
      <div className="container__infoInputs">
        <div className="input-group mb-1">
          <label className="input-group-text" htmlFor="inputGroupFile01">Event Name</label>
          <input type="text" className="form-control input-eventName" id="inputGroupFile01"/>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFileinputGroupFile01">Select Date</label>
          <input type="date" className="form-control input-eventNameDate" id="inputGroupFile01"/>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-primary" onClick={(e) => {initCountdown(e)}}>Start CountDown</button>
          <button type="button" className="btn btn-danger" onClick={(e) => {clearCountdown(e)}}>Stop CountDown</button>
        </div>
      </div>
      <div className="container__countdown">
        <div className="container__days container__time">{days} <span className="container__countdownText">Days</span></div>
        <div className="container__hours container__time">{hours} <span className="container__countdownText">Hours</span></div>
        <div className="container__minutes container__time">{minutes} <span className="container__countdownText">Minutes</span></div>
        <div className="container__seconds container__time">{seconds} <span className="container__countdownText">Seconds</span></div>
      </div>
    </div>
  )
}
