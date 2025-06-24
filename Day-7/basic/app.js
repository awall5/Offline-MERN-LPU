// const root = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(root);

// const card = (
//   <div className="card">
//     <h1>Hello Tittle</h1>
//     <p>Discription</p>
//   </div>
// );

// const card2 = (
//   <div className="card">
//     <h1>Hello Tittle</h1>
//     <p>Discription</p>
//   </div>
// );

// const card3 = (
//   <div className="card">
//     <h1>Hello Tittle</h1>
//     <p>Discription</p>
//   </div>
// );

// const container = (
//   <div>
//     {card}
//     {card2}
//     {card3}
//   </div>
// );

// reactRoot.render(container);

//------------------------------------
// const root = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(root);

// const card = (tittle) => {
//   return (
//     <div className="card">
//       <h1>{tittle}</h1>
//       <p>Discription</p>
//     </div>
//   );
// };

// const Card2 = (obj) => {
//   return (
//     <div className="card">
//       <h1>{obj.tittle}</h1>
//       <p>Discription</p>
//     </div>
//   );
// };

// const container = (
//   <div>
//     {card("Hello")}
//     {card("Hello Brother")}
//     {card("Hey bhai")}
//     <Card2 tittle="Hello Miss"></Card2>
//     <Card2 tittle="Hnji"></Card2>
//   </div>
// );

// reactRoot.render(container);

// --------------------------------------------------------

const root = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(root);

const arr = [
  {
    name: "Awal Manga",
    age: 44,
  },
  {
    name: "Mishi",
    age: 49,
  },
  {
    name: "Komu",
    age: 55,
  },
  {
    name: "Chirag",
    age: 89,
  },
];

const styObj = {
  color: "pruple",
  fontSize: "1.5rem",
  fontWeight: "600",
};

const Card = (props) => {
  const { name, age } = props;
  return (
    <div className="card">
      <h1 style={{ color: "red" }}>{name}</h1>
      <p style={styObj}>{age}</p>
    </div>
  );
};

const app = () => {
  return (
    <div className="parent">
      <h2>Hello</h2>
      {/* <Card name={arr[0].name} age={arr[0].age}></Card>
       */}

      {arr.map((ele) => {
        return <Card name={ele.name} age={ele.age}></Card>;
      })}
    </div>
  );
};

reactRoot.render(app());
