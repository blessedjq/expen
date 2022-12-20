import React from "react";
import './edit.css'; 
const ExpFilter=(prop)=>{

 const all=(ent)=>{
   prop.curr(ent.target.value);
 }
 let n=1;
    return(
        <>
        <select name="years" onChange={all}>
          {prop.oldYear.length>0&&<option value="All"> All </option>}  
          {prop.oldYear.length>0&&prop.oldYear.map((item)=><option value={""+item} key={++n}>{item}</option>)}   
        </select>
        </>
    );
}
export default ExpFilter;