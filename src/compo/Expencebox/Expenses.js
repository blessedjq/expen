import Expence from "./Expencebox";
import React from "react";
import './expencebo.css';
import ExpFilter from "./ExpFilter";

function Expen(prop){
    return(
        <div className="contain">
        <ExpFilter curr={prop.curr} oldYear={prop.oldYear}/>  
        <br></br>  
        <br></br>
        <br></br>
        { 
        prop.items.map((item)=><Expence key={item.key}date={item.date} title={item.title} price={item.price}></Expence>)
        }    
        </div>
    );
}
export default Expen;