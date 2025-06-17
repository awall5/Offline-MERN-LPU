
//----------------OBJECT----------------

// const cse015 ={
//     name: "Awal Manga",
//     address: "Meerut",
// };

// console.log(cse015);


// // To read the particular value 

// const name = cse015.name;

// // To update a particular value

// cse015.address = "Haryana";

// //Create a new value pair

// cse015.Branch = "CSE";

// //delete value pair

// delete cse015.Branch;

// //__________________________________________________________________________________---


const person = {
    name: 'AWAL MANGA',
    height: 1.55,
    college: 'LPU',
    weight: 65,
    roll: '14',
    getBMI: function () {
        const BMI=(this.weight / this.height ** 2);
        if (BMI< 18) {
            console.log('Below AVG');
        }
        else if (BMI >= 18) {
            console.log("Normal");
        }
    }
}

// person.getBMI();
// const allkeys = Object.keys(person);
// console.log(allkeys);
// const allvalues = Object.values(person);
// console.log(allvalues);
// const allentries = Object.entries(person);
// console.log(allentries);




const whichkey = prompt("Which key you want to see ?");     //Isse pucha ja skta hai ki kya chaiye user ko pop up ata hai
console.log(person[whichkey]);

//--------------DE-Structuring-------------
const {weight , college} = person;
console.log("❤️-->",weight,college);

