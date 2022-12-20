import React, { useState } from 'react';
import './App.css';
import ExpenceChart from './compo/Chart/ExpenseChart';
import EditBox from './compo/Expencebox/EditBox';
import Empty from './compo/Expencebox/Empty';
import Expen from './compo/Expencebox/Expenses';



const val=[ 
  {date:new Date(2002,4,1),
    title:'RAZORBLADE 15',
    price:2199,key:1},
    {date:new Date(2002,12,25),
     title:'ROG STRIX',
     price:1020,key:2},
     {date:new Date(2020,9,13),
    title:'Hp 15',
    price:21099,key:3},
    {date:new Date(2022,11,2),
     title:'Nitro 5',
     price:16111,key:4},
];
const final=[...new Set(val.map(x=>x.date.getFullYear()))];
function App() {
 const[expense,setExpense]=useState(val);
 const[year,setYear]=useState(final);
 const [curr,setCurr]=useState('All');
 let exdata=expense.filter(exp=>{
    return exp.date.getFullYear().toString()===curr;
});
if(curr==='All')exdata=expense;
  return (
    <div>
   <div className='box' id='nav'><h1>E X P E N S E S</h1></div>   
   <EditBox addNew={setExpense} old={expense} oldYear={year} newYear={setYear}/>

   <ExpenceChart data={exdata}/>

   {expense.length===0&&<Empty/>}
   { 
   expense.length>0&&<Expen  items={exdata} newYear={setYear} oldYear={year} curr={setCurr}></Expen>
   }
   </div> 
  );
}

export default App;
