//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.title}</p>
      <img src={props.img} alt="Ronald reagan photo" />
    </div>
  );
}

ReactDOM.render(
  <div>
    <App />
    <Card
      name="Ronald Reagan"
      title="former president"
      img="https://www.whitehouse.gov/wp-content/uploads/2021/01/40_ronald_reagan.jpg"
    />
  </div>,
  document.getElementById("root")
);
