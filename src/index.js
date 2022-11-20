import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

function Article() {
    return (
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    );
  }
  function Comment() {
    return <div>Naturally, I agree with this article.</div>;
  }
  function App() {
    return (
      <div>
        <Article />
        <Comment />
      </div>
    );
  }