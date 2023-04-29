////constant 
var re = "React";

///using function 
var upperStr = function upperStr(user) {
    return user.toUpperCase();
};
///Using React JSX Element
var app = React.createElement(
    "div",
    null,
    90 + 20,
    "Hello World JSX ",
    re + ':',
    " ",
    1 + 3,
    React.createElement("br", null),
    upperStr(re),
    React.createElement(
        "div",
        { id: "id1" + "32", className: "class1" },
        "ddd"
    )
);

ReactDOM.render(app, document.getElementById("root"));