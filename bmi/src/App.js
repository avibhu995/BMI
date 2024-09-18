import "./App.css";
import React, {useState} from "react";
function App() {
//making state of our application 

const [weight, setweight] = useState(0);
const [height, setheight] = useState(0);
const [bmi , setBmi] = useState("");
const [message, setMassage] = useState("  ");

//Logic 

let  calcBmi = (e)=>{
  e.preventDefault();

  if (weight ===0 || height===0){
    alert("please enter valid weight and height");
  }
   else {
    let bmi =  (weight/(height*height))*703;
    setBmi(bmi.toFixed(1));

    //

    if (bmi<25){
      setMassage('you are underweight')
    }
    else if (bmi>=25 &&  bmi<30){
      setMassage("you are a healthy weight")
    }
    else {
      setMassage('you are a overweight')
    }
   }
};

//reload

let reload = ()=>{
  window.location.reload();
};

  return (
    <div className="App">
      <div className="container">
        <h2> BMI Calculator </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight (ibs)</label>
            <input
              type="text"
              placeholder="Entre Weight value"
              value={weight}
              onChange={(e)=>setweight(e.target.value)}
            /> 
          </div>
          <div>
            <label>height (in)</label>
            <input
              type="text"
              placeholder="Entre height value"
              value={height}
              onChange={(e)=>setheight(e.target.value)}
            />
            
          </div>
          <div>
            <button className=" btn" type="submit">
              {" "}
              Submit{" "}
            </button>
            <button className="btn btn-outline " onClick={reload} type="submit">
              {" "}
              Reload
            </button>
          </div>
          <div className="center">
            <h3> Your BMI is:{bmi}</h3>
            <p> {message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
