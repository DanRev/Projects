import React  from 'react';
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Basic.scss';

const Quizitem = (props) => {

  var textAnswers = [];

  const shuffle = (arra1) => {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }

  const extractProps = () => {
    console.log(props);
    var answers = [props.value.correct_answer, ...props.value.incorrect_answers];
    var reorder = shuffle(answers);
    textAnswers = reorder;
  }
  
  const reponseDataQuestion =  (event) => {
    props.setAnswer(event);

  }

  return (
    <div className="QuizItem">
      <div className="QuizItem__title">{props.value.question}</div>
      <ul className="QuizItem__answers rounded">
        {extractProps()}
        {textAnswers.map((value, index)=>{
          return <li className={"answer"+props.value.id+"-"+index+" QuizItem__answerItem border border-secondary rounded"} onClick={(e)=>{reponseDataQuestion(e)}}>{value}</li>
        })}
      </ul>
    </div>
  );
}

export default Quizitem;