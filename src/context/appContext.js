import { createContext, useState, useContext} from "react";


const AppContext=createContext(null);

export const useAppContext=()=>{
    const context=useContext(AppContext);

    if(context===undefined){
throw new Error("app with be appcontext provider")
    }
   return context
}

const AppContextProvider=({children})=>{
    const [cart, setCart]=useState([])

    const addtoCart=(book)=>{
        const oldcart=[...cart];
        const newcart=oldcart.concat(book)
        setCart(newcart)

    };

    const removeFromCart=(id)=>{
        const oldcart=[...cart];
        const newcart=oldcart.filter((book)=>book.id!==id)
        setCart(newcart)

    };

    return(
        <AppContext.Provider value={{cart, addtoCart, removeFromCart}}>
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider