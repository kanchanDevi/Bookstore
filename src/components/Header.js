import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from './../assests/book.png'
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';




const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const cartItems =useSelector((store)=>store.cart.items)
  console.log(cartItems)

  return (
    <>
      <div className="flex  flex-row justify-between pt-5 pl-2 pr-2 bg-[#fff1e6]">
       <Link to ="/" ><img src={logo} alt="logo" className="flex mt-2 items-end w-[59px]"  /></Link>
       
        <div className="">
          <ul className="flex justify-evenly items-end space-x-3">
          <Link to= "/"> <li className="pl-2 font-bold text-xl">BookList</li></Link> 
          <Link to= "/cart"> <li className="pl-2  flex items-center font-bold text-lg"><FaShoppingCart className="mr-2"/>{cartItems.length}</li></Link> 
        {isAuthenticated && (
              <p>
                {" "}
                <h2 className="font-semibold">{user.name}</h2>
              </p>
            )}
            
            {isAuthenticated ? (
              <li className="">
                <button className="font-bold text-xl mt-2 bg-black text-white p-3 rounded-lg"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <Link to ="/"><li className="pl-2 items-center mt-2">
                <button onClick={() => loginWithRedirect()} className="ont-bold text-xl mt-2 bg-black text-white p-3 rounded-lg">Sign In</button>
              </li></Link>
            )}
                     
                      

          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
