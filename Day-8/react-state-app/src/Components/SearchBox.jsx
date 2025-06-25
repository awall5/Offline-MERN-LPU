import { useState } from "react";


const SearchBox=()=>{
    const [monitor,remote]=useState();

    // let searchText = "Chiii";
    const handleSearch =(e) =>{
        // searchText = e.target.value
        // console.log(searchText);
        remote(e.target.value);
    };

    return (<div>
        <input type="text" onKeyUp={handleSearch}>
        </input>
        {/* <h3>{searchText}</h3> */}
        <h3>{monitor}</h3>

        </div>
    )


};

export{SearchBox};