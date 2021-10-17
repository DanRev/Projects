import jsonData from "../resources/questions.json";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizItem from "../components/QuizItem";
import '../components/styles/Basic.scss';
import React , { useState } from 'react';
import $ from "jquery";

const Quizapp = () => {

  const [ questionNumber, setQuestionNumber ] = useState(1);
  const [ hasAnswer, setHasAnswer ] = useState("");

  const makeQuestionVisible = (item, index) => {
    if (index + 1 < jsonData.length) {
      $("."+item)
    }
  }

  const responseQuestion = (eventData) => {
    console.log("Hola", eventData)
  }
  
  return (
    <div className="container container__question">
      {Object.values(jsonData)[0].map((index , value)=>{
        return <QuizItem key={value} value={index} className={"QuizItem"+index} visibility={value} setAnswer={(e)=>{responseQuestion(e)}} />;
      })}
      {hasAnswer!==""&&<button type="button" class="btn btn-primary">Next Question!</button>}
    </div>
  );
}

export default Quizapp;
