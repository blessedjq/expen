import React from "react";
import ChartBox from "./ChartBox";

const ExpenceChart=(props)=>{
let exp=[
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sep',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0},
];

let ref=exp;

let max=0;
for(const val of props.data){
    let expenceMonth=val.date.getMonth();
    if(expenceMonth===0)expenceMonth=12;
    ref[expenceMonth-1].value+=val.price;
    if(max<ref[expenceMonth-1].value)max=(ref[expenceMonth-1].value);
}
    return(
        <>
        <ChartBox max={max} data={ref}/>
        </>
       
    );
}
export default ExpenceChart;