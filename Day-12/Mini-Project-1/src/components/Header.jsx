
 const Header = () => {
  return (
    <header className="flex bg-black p-4 justify-between border-1 border-amber-50 rounded-xl"  >
    <div>
        <p className=" text-purple-600">Shooping-App</p>
    </div>
    <div>   
        <input  className=" bg-amber-100 border-2 text-purple-600"/>
    <button className=" bg-white text-purple-600" >Search</button>
    </div>
    <div>
        <div className="h-8 w-8 rounded-full bg-purple-600"></div>
    </div>
    </header>
  )
}

export{Header};
