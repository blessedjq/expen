import React from "react";
import ChartBar from "./ChartBar";
import './chartbar.css'

const ChartBox=(props)=>{
    return(<>
    <div className="box">
        <div id="war">
      {
        props.data.map((val)=>(
            <ChartBar key={val.label} value={val.value} max={props.max} name={val.label}/>
        ))
      }
       </div>
    </div>
    </>
   
    );
}
export default ChartBox;