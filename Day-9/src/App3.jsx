import { useState } from "react";

const App3 =()=>{
    const [searhText,setSearchText] = useState(()=>{
        const val2 = localStorage.getItem('SearchText');
        if(val2){
            return val2;
        }
        else{
            return 'arun';
        }
    });
    console.log(searhText);
    const handleSearch = (e)=>{
        // setSearchText(e.target.value);
        const val = e.target.value;
        localStorage.setItem('SearchText',val);
        setSearchText(val);
    }

    return (
        <div>
            <input type="text"  onChange={handleSearch} />
            <h1>
                {searhText}
            </h1>
        </div>
    )

}





export {App3};