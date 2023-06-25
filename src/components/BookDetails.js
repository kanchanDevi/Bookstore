import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { DETAIL_URL } from '../constant'
import { useAppContext } from '../context/appContext';
import { addItem } from '../Utils/Cartslice';
import { useDispatch } from "react-redux";



const BookDetails=()=>{
  const [book, setBook]=useState()

  const {id}=useParams()
  const {cart, addtoCart, removeFromCart}= useAppContext()

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

const addCart=(id)=>{
  const bool=cart.some((book)=>book.id===id);
  return bool
}
  useEffect(()=>{
    axios.get(`${DETAIL_URL}/${id}`).then(res=>{
      setBook(res.data);
    }).catch((err)=>console.log(err))

  }, [id])

  return(
    <>
    <div className='flex items-start justify-evenly p-5 ml-52 mr-52'>
<div className="w-[100%] ">
  <h2 className='font-semibold whitespace-nowrap mb-2 text-center'>{book?.title}</h2>
  <img src={book?.image_url} alt ="details page" className='w-[300px] h=[300px]'/>
  </div> 
  <div className='flex flex-col justify-start mt-5 p-3'>
   
    <p className='text-lg'>{book?.description}</p>
   
    <p className='font-semibold'>{book?.edition}</p>
    <p className='capitalize hover:uppercase'>{book?.genres}</p>
    <p className='font-bold mt-10'>{book?.authors}</p>
   
  
              <button className="justify-center hover:bg-gray-800 w-[200px] bg-black text-white p-3 m-2 rounded-lg" onClick={()=>handleAddItem(book)} key={book?.id}>Add To Cart</button>
        
    </div>
    </div>  
    </>
  )
}
export default BookDetails