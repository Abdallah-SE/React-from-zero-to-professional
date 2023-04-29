function Test(props){
    return  <div>
            Welcome I AM {props.name  + " " + props.lname} From Test Fun.
            <p> {props.children} </p>
        </div>;
}


export default Test;
