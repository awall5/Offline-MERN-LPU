// // import { useState } from "react";


// // const App=()=>{
// //     const [monitor,remote]=useState();

// //     // let searchText = "Chiii";
// //     const handleSearch =(e) =>{
// //         // searchText = e.target.value
// //         // console.log(searchText);
// //         remote(e.target.value);
// //         console.log(monitor);
// //     };


// //     return (<div>
// //         <input type="text" onKeyUp={handleSearch}>
// //         </input>
// //         {/* <h3>{searchText}</h3> */}
// //         <h3>{monitor}</h3>

// //         </div>
// //     )


// // };

// // export {App} ;

// // import { useState } from "react";


// // const App=()=>{
// //     const [monitor,remote]=useState(0);
// //     // console.log(monitor);

// //     const handleButton =() =>{
// //         // Override kri hai ye value // Jo latest hoga vo change ayega
// //         remote(monitor+ 1);  
// //         remote(monitor+ 3);
// //         remote(monitor+ 1);  
// //         console.log(monitor);
// //     };
    

// //     return (<div>
// //         <button onClick={handleButton}> 
// //         Click Me!!
// //         </button>
// //         <h3>Count :: {monitor}</h3>
// //         </div>
// //     )


// // };

// // export {App} ;

// import { useState } from "react";


// const App=()=>{
//     const [monitor,remote]=useState(0);
//     // console.log(monitor);

//     const handleButton =() =>{
//         //Isme inc hoga 2 ka isme do alag alag func hai dono run krenge toh value dono ki add hogi 
        
//         remote((prev)=>{
//             return prev+1;
//         });  
//         remote((prev)=> prev+1 );       //Aise b likh skte hai lekin agar one line code hai toh  

//         console.log(monitor);
//     };
    

//     return (<div>
//         <button onClick={handleButton}> 
//         Click Me!!
//         </button>
//         <h3>Count :: {monitor}</h3>
//         </div>
//     )


// };

// export {App} ;