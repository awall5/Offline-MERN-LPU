console.log('Hello');
//--------------------------------------------------------------------

// function calc( juice, food){      //function decleration 
//     // let juice = 50;
//     let gstOnjuice = 0.1;
//     let gstOnfood = 0.05;
//     let billofjuice = juice + juice*gstOnjuice;
//     let billoffood = food + food*gstOnfood;
//     return billofjuice +billoffood;
// }
// //------------------------------------------------------------------

// // function Foodcalc(food){
// // // let fries = 70;
// // let gstOnfood = 0.05;
// // return billoffood = food + food*gstOnfood;
// // }

// //---------------------------------------------------------

// let total = calc(50,70); //function innvoation
// console.log(total);
// //--------------------------------------------------------------------

function print(name, amount){
    console.log("...........");
    console.log(name);
    console.log(amount+"$");
    console.log("..................");
}
//2. Function 
const billiea = function bill(food,gst){
    let billoffood = food + food*gst ;
    return billoffood;
}
let res1 = bill(50,0.05);
let total1 = print('Mango juice' ,res1);

let res2 = bill(90,0.1);
let total2 = print('Roti' ,res2);