import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./employer.css";
import "./style.css";
import "./animate.css";
import "./quiz.css";
// import "./personality.css";
// import './quiz1.css'
import "./signup.css";
// import './result.css'
import "./login.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
