// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World with JavaScript";
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement("h1", {id:"first_h1", className:"heading", text:"normalText"}, "Hello world with React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root  .render(heading);
// console.log(heading);


const heading = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" },React.createElement("h1", { id: "child1" })),
	React.createElement("div", { id: "child2" }, React.createElement("h1", { id: "child1" })),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
