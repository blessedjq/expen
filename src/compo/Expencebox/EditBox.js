import './edit.css';
import React, { useState } from "react";
const EditBox=(prop)=>{
   const [ntitle,setTitle]=useState('');
   const [ndate,setDate]=useState('');
   const [nprice,setPrice]=useState(0);
   const[n,setn]=useState(5);
   const handleChangeDate=(evt)=>{
    const arr=evt.target.value.split("-");
    setDate(new Date(Number(arr[0]),Number(arr[1]),Number(arr[2])));
   }
   const handleChangeTitle=(evt)=>{
    setTitle(evt.target.value);
    }
    const handleChangePrice=(evt)=>{
        setPrice(evt.target.value);
        }

   const handleSubmit=(evt)=> {
     if(ndate===''||nprice===0||ntitle===''){
      alert("Please fill all the requirment");
      return;
     }
    setn(n+1);
      const val={
        date:ndate,
        title:ntitle,
        price:+nprice,
        key:n
      };
        prop.addNew([...prop.old,val]);
        if(!prop.old.some(item => item.date.getFullYear().toString()===ndate.getFullYear().toString()))prop.newYear([...prop.oldYear,ndate.getFullYear()]);
        setDate(new Date(2002,11,25));
        setPrice(0);
        setTitle('');
        evt.preventDefault();
      }
    return( 
        <>
        <div className="box">
        <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text"  onChange={handleChangeTitle} />
        </label>
        <br></br>
        <label>
          Date:
          <input type="date"  onChange={handleChangeDate} id ="mon"  max={new Date()}/>
        </label>
        <br></br>
        <label>
          Price:
          <input type="number" onChange={handleChangePrice} />
        </label>
        <br></br>
        <input type="submit" value="SUBMIT" id="go" />
       </form>
        </div> 
        </>
    );
}
export default EditBox;