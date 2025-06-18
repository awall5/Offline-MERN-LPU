// console.log(window);

// const headings = document.getElementsByTagName("h1");
// console.log("Heading ", headings);

//By Tag-----------

// const pa = document.getElementsByTagName("p");
// console.log("paragraph ", pa);

// pa[0].innerText = "Hello i am awal DOM Overright"; // Isme tum html ka data change kr skte ho after getting the correct element

// const rappa = document.getElementsByClassName("card");
// console.log("class name ", rappa);

//By Class-------------

// const diff = document.getElementsByClassName("text-brown");
// console.log("class name ", diff);


// By ID---------------

// const text = document.getElementById('text-1');
// console.log("Id ",text);

// text.style.backgroundColor = "lime";


//4. Use of --------( querySelectorAll )

// const forid = document.querySelectorAll("#text-1");
// console.log("for ID use (#) ", forid);

// const forclass = document.querySelectorAll(".card");
// console.log("For the class use (.) ", forclass);

// const titles = document.querySelectorAll("h1");
// console.log("for tag dont use anything ", titles);

//5. Use of --------( querySelector )

const forid = document.querySelector("#text-1");
console.log("for ID use (#) ", forid);

const forclass = document.querySelector(".card");
console.log("For the class use (.) ", forclass);

const titles = document.querySelector("h1");
console.log("for tag dont use anything ", titles);