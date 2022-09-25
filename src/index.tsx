import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// HENRY W: 2pm
// need an explanation for line 9.
// why is the url path just '/'???? How does that make sense
// everything else is understandable and really cool.

// also this just occurred to me. When I hover over a function or object
// I get a nice tooltip about what it does or is. How do I have my
// code do that too? Is it just with header comments? I'm gonna check
// the node.js source to see...
// ok yeah so it's just simple header comments and vscode does the
// heavy lifting.

// does the constructor get called when an element is initialized?
// example is how App() in App.tsx must get called when <App/> gets called
// in index.tsx