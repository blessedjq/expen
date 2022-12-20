import React from 'react';
//import EditBox from './EditBox';
import './expencebo.css';

const Expence=(props)=>{
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
    const title=props.title;

   return( 
    <>
   <div className="expense-item">
       <div className="dateex">
       <h1>{month}</h1>
      <h1>{day}</h1>
      <h1>{year}</h1></div>
        <div className="expense-item__description">
         <h1>{title}</h1>
        </div>
        <div className="expense-item__price">
            <h1>{'₹ '+props.price+' /-'}</h1>
        </div>

    </div>
    </>
    );
}

export default Expence;
