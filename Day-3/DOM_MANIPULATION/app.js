
//----------- Creating a element --------------

const title = document.createElement("h1");
const parent = document.getElementById("root");

//Adding text to aan element 

title.innerText = "Hello From DOM";
title.style.textDecoration = "underline";
title.style.textDecorationColor = "magenta";

parent.append(title);

const title2 = document.createElement("h2");
title2.innerText = "Hello From DOM 2!";
parent.append(title2);