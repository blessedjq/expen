import React from "react";

import './chartbar.css';
const ChartBar=(props)=>{
    let size=100-((props.value/props.max)*100)+"%";
    return(
        <>
        <div className="hs">
        <div className="bar">
          <div className="fill" style={{height:size}}>
           
            </div>  
        </div>
        <br></br>
        <h3>{props.name+""}</h3>
        </div>
        </>
    );
}

export default ChartBar;