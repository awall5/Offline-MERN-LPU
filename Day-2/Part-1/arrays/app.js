
// //----------------OBJECT----------------

// // const cse015 ={
// //     name: "Awal Manga",
// //     address: "Meerut",
// // };

// // console.log(cse015);


// // // To read the particular value 

// // const name = cse015.name;

// // // To update a particular value

// // cse015.address = "Haryana";

// // //Create a new value pair

// // cse015.Branch = "CSE";

// // //delete value pair

// // delete cse015.Branch;

// // //__________________________________________________________________________________---


// const person = {
//     name: 'AWAL MANGA',
//     height: 1.55,
//     college: 'LPU',
//     weight: 65,
//     roll: '14',
//     getBMI: function () {
//         const BMI=(this.weight / this.height ** 2);
//         if (BMI< 18) {
//             console.log('Below AVG');
//         }
//         else if (BMI >= 18) {
//             console.log("Normal");
//         }
//     }
// }

// // person.getBMI();
// // const allkeys = Object.keys(person);
// // console.log(allkeys);
// // const allvalues = Object.values(person);
// // console.log(allvalues);
// // const allentries = Object.entries(person);
// // console.log(allentries);




// const whichkey = prompt("Which key you want to see ?");     //Isse pucha ja skta hai ki kya chaiye user ko pop up ata hai
// console.log(person[whichkey]);

// //--------------DE-Structuring-------------
// const {weight , college} = person;
// console.log("❤️-->",weight,college);


// const arr = ["Awal","Chirag","Lol"];
// console.log(arr);


// //REad a single value 
// console.log(arr[0]);

// const [a,b,c] = arr;
// console.log(b,c);

// // arr[10] = "Honda";
// arr.push("Honda");  // add element in last 

// arr.pop();  // take the element from last

// arr.shift();    // It removes the element from front

// arr.unshift('BMW','MERCEDES');  // It add elements from front

// console.log(arr);

// arr.splice(1,2,"Bugati",'Rolls Royas');     //Particular element p jake delete krta hai

// console.log(arr.indexOf("Bugati"));


// const person = {
//     name: 'AWAL MANGA',
//     height: 1.55,
//     college: 'LPU',
//     weight: 65,
//     roll: '14',
// }

// const person2 = person;
// const per = {...person};        // agar {} ye use krenge toh bhai address change hojyega or fir vo equal nai honge 

// if(person==per){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//-------------------------------------------------------------------


const arr= [
        {name: "Awal Manga" , city: "Meerut"},
        {name: "Chirag", city: "Jalandhar"},
];

const func = (a)=>{
    if (a.name === "Awal Manga"){
        return {...a, remark: "Yes"};
    }
    else{
       return {...a, remark: "No"};
    }
}
const ele  = arr.map(func);
console.log(ele);

