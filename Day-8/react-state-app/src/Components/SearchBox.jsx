const SearchBox=()=>{
    let searchText = "Chiii";
    const handleSearch =(e) =>{
        searchText = e.target.value
        console.log(searchText);
    };

    return (<div>
        <input type="text" onKeyUp={handleSearch}>
        </input>
        <h3>{searchText}</h3>
        </div>
    )


};

export{SearchBox};