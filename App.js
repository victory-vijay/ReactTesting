/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is react create JS react"
);

console.log("reactelement7", heading); // This will return a React object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // Here is the actual converting React object to html element
 */

// Complex structure of React elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1tag" }, "This is H1 Tag"),
    React.createElement("h2", { id: "h2tag" }, "This is H2 Tag"),
    React.createElement("h3", { id: "h3tag" }, "This is H3 Tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1tag" }, "This is H1 Tag"),
    React.createElement("h2", { id: "h2tag" }, "This is H2 Tag"),
    React.createElement("h3", { id: "h3tag" }, "This is H3 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
