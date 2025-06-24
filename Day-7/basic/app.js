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
const root = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(root);

const card = (tittle) => {
  return (
    <div className="card">
      <h1>{tittle}</h1>
      <p>Discription</p>
    </div>
  );
};

const Card2 = (obj) => {
  return (
    <div className="card">
      <h1>{obj.tittle}</h1>
      <p>Discription</p>
    </div>
  );
};

const container = (
  <div>
    {card("Hello")}
    {card("Hello Brother")}
    {card("Hey bhai")}
    <Card2 tittle="Hello Miss"></Card2>
    <Card2 tittle="Hnji"></Card2>
  </div>
);

reactRoot.render(container);
