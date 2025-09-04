import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_71V8bNjZBVaFTbgsxq87XrXdi8UjSq5neA&s" alt="Logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);