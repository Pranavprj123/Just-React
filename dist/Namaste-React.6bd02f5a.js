const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {}, "This is h1 child element"),
    React.createElement("h2", {}, "This is h2 child element")
]), React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {}, "This is h1 child element"),
    React.createElement("h2", {}, "This is h2 child element")
]));
console.log(parent);
// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=Namaste-React.6bd02f5a.js.map
