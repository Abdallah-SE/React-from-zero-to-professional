////constant 
const re ="React";

///using function 
const upperStr  = 
      function(user) {
       return  user.toUpperCase();
      };
///Using React JSX Element
let app =
    <div>
        {90 + 20}
      Hello World JSX {re + ':' } {1+3} 
      <br /> 
      { upperStr(re) }
      
      <div id={"id1" + "32"} className={"class1"}>ddd</div>
    </div>;

ReactDOM.render(app,document.getElementById("root"));





