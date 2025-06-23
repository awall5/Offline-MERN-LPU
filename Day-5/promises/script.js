const request = window.fetch("https://dummyjson.com/recipes");
console.log(request);
console.log(request);

request
  .then((response) => {
    console.log("response is ", response);
    const pr = response.json();
    pr.then((data) => {
      renderui(data);
    });
  })
  .catch((err) => {
    alert("Unable to fetch data-->", err.message);
  });
const parent = document.getElementById("root");
const renderui = () => {
  const { recipies } = data;
};

recipies.forEach((element) => {
  const newDive = document.createElement("div");
  newDive.innerHTML = `
    <p>${element.title}</p>
    `;
});
