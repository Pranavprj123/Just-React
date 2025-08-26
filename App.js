import React from "react";
import ReactDOM from "react-dom/client";
//React


//JSX - it is not HTML in JS        it is HTMl like Syntax or XML Syntax


const title =  (
    <h1 className="head" tabIndex={1}>
        Hello World from JSX!
    </h1>
);

//React Functional Component

//Component Composition
const HeadingComponent = () => (
    <div id="container">
        {/* Title is the Component Composition */}
        {title}
        <h1 className="header">Hello World from Functional Component!</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);