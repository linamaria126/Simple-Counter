//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0;
setInterval(() => {
  counter += 1;
  const digitoUno = Math.floor((counter / 1) % 10);
  const digitoDos = Math.floor((counter / 10) % 10);
  const digitoTres = Math.floor((counter / 100) % 10);
  const digitoCuatro = Math.floor((counter / 1000) % 10);
  const digitoCinco = Math.floor((counter / 10000) % 10);
  const digitoSeis= Math.floor((counter / 10000) % 10);


  ReactDOM.render(
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-warning vh-100">
      <div className="h1 display-1 py-5 fw-semibold">Simple Counter</div>

      <div className="row justify-content-center flex-row-reverse">

      <div className="box-counter text-light rounded-1 m-2">
          {digitoUno}
        </div>
        <div className="box-counter text-light rounded-1 m-2">
          {digitoDos}
        </div>
        <div className="box-counter text-light rounded-1 m-2">
          {digitoTres}
        </div>
        <div className="box-counter text-light rounded-1 m-2">
          {digitoCuatro}
        </div>
        <div className="box-counter text-light rounded-1 m-2">
          {digitoCinco}
        </div>
        <div className="box-counter text-light rounded-1 m-2">
          {digitoSeis}
        </div>
        <div className="box-counter text-light rounded-1 m-2">
        <i class="bi bi-clock-history"></i>
        </div>
      </div>
    </div>,

    document.querySelector("#app")
  );
}, 1000);
