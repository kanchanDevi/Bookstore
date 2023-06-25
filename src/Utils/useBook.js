// import { useState, useEffect } from "react";
// import { URL } from "../constant";

// const useBook=(id)=>{
//     const [book, setBook] = useState(null); 
 
//     useEffect(() => {
//         getBookInfo();
//       }, []);
    
//       async function getBookInfo() {
//         const data = await fetch(
//         URL + id //mistake 3: Used the wrong URL to fetch details of menu
//         );
//         const json = await data.json();
//         console.log("menu-", json);
//         setBook(json);
//       }
      
//     return book
// }
// export default useBook