// function print(){
//     console.log("Hello");
// }

// print();

// const op = function (p)  {                             // function keyword k sath 
//     console.log("Heyyy without "+p+" function keyword");
// }



// const printhey = (p) => {                             //Bina function keyword k 
//     console.log("Heyyy without "+p+" function keyword");
// }

// printhey("Rajje");



// const printhey = (total) => {                             
//     console.log(".............");
//     console.log(total);
//     console.log("...............")
// }

const Totalbill = (total,cal,pp) => {                             
const totalbill = total+cal+pp;
console.log("Total Billing amount is "+totalbill);
    
}


const generatefoodbill = (yummy,gst) =>{
    let total  = yummy+yummy*gst;
    return total;
}

const generateclothesbill = (clo,gst) =>{
    let total  = clo+clo*gst;
    return total;
}

const generatedrinkbill = (daru,gst) =>{
    let total  = daru+daru*gst;
    return total;
}



const generatebill = (food,clothes,drink,TB)=>{
    const gst = 1.8;
    const foodam  = generatefoodbill(food,gst);
    const clothesam  = generateclothesbill(clothes,gst);
    const drinkam  = generatedrinkbill(drink,gst);
    const total = Totalbill(foodam,clothesam,drinkam);
    return total; 
    

}








generatebill(100,200,300,Totalbill);
