import { useState } from "react";


const App2=()=>{
    const [monitor,remote]=useState(()=>{
        const val = localStorage.getItem("contain-value");
        if(val){
            return parseInt(val);
        }
        else{
            return 0;
        }
    });
    // console.log(monitor);

    const Increment =() =>{
        //Isme inc hoga 2 ka isme do alag alag func hai dono run krenge toh value dono ki add hogi 
        
        remote((prev)=>{
            const newValue = prev+1;
            localStorage.setItem("contain-value",newValue);
            return newValue;
        });  
          

        console.log(monitor);
    };
    const ResetBut =() =>{
        remote(0);
        localStorage.setItem("contain-value",0);
    }


        const Decrement =() =>{
        //Isme inc hoga 2 ka isme do alag alag func hai dono run krenge toh value dono ki add hogi 
        
        remote((prev)=>{
            const newValue = prev-1;
            localStorage.setItem("contain-value",newValue);
            return newValue;
        });  
          

        console.log(monitor);
    };

    return (<div>
        <button onClick={Increment}> 
        ++
        </button>
        <button onClick={ResetBut}>Reset</button>
        <button onClick={Decrement}>--</button>
        <h3>Count :: {monitor}</h3>
        </div>
    )


};

export {App2} ;