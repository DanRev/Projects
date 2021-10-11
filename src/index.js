import Test from './components/Binary';
import CountdownTimer from './components/CountdownTimer';
import FlipImage from './components/FlipImage';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import React from 'react';
import App from './App';

//CSS, SASS
import './index.css';

alert = function (msg,icon = "error",onOk = undefined) {
  Swal.fire({
    text: msg,
    icon: icon,
    confirmButtonText: 'Continuar',
    confirmButtonColor: '#e35e9e'
  }).then((result) => {
    if (onOk && result.isConfirmed) {
      onOk();
    }
  })
}

// alert = async function (msg,icon = "error",onOk = undefined) {
//   Swal.fire({
//     input: 'textarea',
//     inputLabel: 'Message',
//     inputPlaceholder: 'Type your message here...',
//     inputAttributes: {
//       'aria-label': 'Type your message here'
//     },
//     showCancelButton: true
//   }).then((result) => {
//     console.log({result});
//     if (onOk && result.isConfirmed) {
//       onOk(result.value);
//     }
//   })
// }


// async function createItem(){

//   return new Promise((resolve, reject) => {
//     var result = alert("Ingresa el numero de componente que deseas ver","Numero de componente",(res) => {
//       switch (res){
//         case "1":
//           console.log(res==="1", res===1, 'Soy uno');
//           resolve(<App/>)
//         case "2":
//           console.log(res==="2", res===2, 'Soy dos');
//           resolve(<Test/>)
//         default:
//           return "";
//       }
//     });
//   })
// }

prompt = async function (msg,icon = "error") {
  let { value: text } = await Swal.fire({
    input: 'text',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })

  return text;
}


async function createItem(){
    var result = await prompt("Ingresa el numero de componente que deseas ver","Numero de componente");
    
    switch (result){
      case "1":
        return <Test/>;
      case "2":
        return <CountdownTimer/>;
      case "3":
        return <FlipImage/>;
      default:
        return "";
    }
}

async function init() {
  var comp = await createItem();

  ReactDOM.render(
    <React.StrictMode>
      {comp}
    </React.StrictMode>,
    document.getElementById('root')
  );
}

init();