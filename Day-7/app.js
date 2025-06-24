console.log("Hello From React");

// const item1 = React.createElement("li", {}, "Item 1");
// const item2 = React.createElement("li", {}, "Item 2");
// const list = React.createElement("ul", {}, [item1, item2]);

const list2 = (
  <ul>
    <li> Item1 </li>
    <li> Item1 </li>
  </ul>
);

const root = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(list2);
