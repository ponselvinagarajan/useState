import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Use2 from './use'


function App() {
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
  }
    
    
    ]
  const[count,setCount]=useState("Blue")
  const change=()=>{
      setCount("Red")
  } 
  return (
    <div className="App">
        {/* <Use data={use1}/> */}
        <div className="data2">
                <p>value:{count}</p>
                <button onClick={change}>change</button>
                <Use2 data3={employee}/>
          </div> 
      </div>
  );
}

export default App;
