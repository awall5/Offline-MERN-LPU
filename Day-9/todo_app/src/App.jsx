import { useState } from "react";
console.log("Hello");

const App = () => {
  const [arr, setArr] = useState([]);
  // const [name,setName] = useState("");
  // const [city,setCity] = useState("");

  const OpSubmit = (e) => {
    e.preventDefault();
    // console.dir(e.target[0].value)
    // console.dir(e.target[1].value)
    const name = e.target.user.value;
    const city = e.target.city.value;

    setArr((prev) => {
      const temp = [...prev];
      temp.push({ name, city });
      return temp;
    });
  };

  const handleDelete=(idx)=>{
    setArr((prev)=>{
      const temp = [...prev];
      temp.splice(idx,1);
      return temp;
    });
  };


  return (
    <div>
      <form onSubmit={OpSubmit}>
        <input type="text" placeholder="Name" name="user" />
        <input type="text" placeholder="City" name="city" />
        <button>Submit</button>
      </form>
      <div>
        {arr.map((ele,idx) => {
          return (
            <div>
              <h4>{ele.name}</h4>
              <p>{ele.city}</p>
              <button onClick={()=>{
                // console.log(idx);
                handleDelete(idx);
              }}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { App };
