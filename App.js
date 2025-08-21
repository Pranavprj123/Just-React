import React from "react";
import ReactDOM from "react-dom/client";
//React


//JSX - it is not HTML in JS        it is HTMl like Syntax or XML Syntax
const jsxHeading = <h1 id="heading">Hello World from JSX!</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);