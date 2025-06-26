import { useState } from "react";

const App4=()=>{
    const [arr,setArr] = useState(['Kiwi','Banana']);
    console.log("New Array---->> ",arr);

    const HandleFruit=()=>{
        const temp = [...arr]
        temp.push("Mango");
        console.log(temp);
        setArr(temp);
    }

    return(
        <div>
            <ul>
                {arr.map((ele) =>{
                    return <li>{ele}</li>
                }

                )}
            </ul>
            <button onClick={HandleFruit}>
                Add Mango
            </button>
        </div>
    )
}

export {App4};