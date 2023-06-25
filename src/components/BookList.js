import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../constant";
import {filterData} from './../Utils/helper'
import { useNavigate } from "react-router-dom";



const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredResult, setfilteredResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
        setfilteredResult(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!books) return null;

  return (
    <>
      <div className="flex justify-center bg-[#fff1e6] p-3">
        <input
          type="search"
          placeholder="search"
          value={searchInput}
          className="p-5 rounded-lg border-1px solid translate w-[400px] h-11 bg-white "
          onChange={(e) => {
            const data = filterData(searchInput, books);
            console.log(data);
            setfilteredResult(data);
            setSearchInput(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center m-2 w-[100%] h-[100%] text-center">
        {filteredResult?.map((book) => (
          <div
            key={book?.id}
            className="h-90  w-90 border-1 border-red-200 m-2 "
          >
            <div className="overflow-hidden">
              <h1 className="mt-2 text-sm font-bold">{book.title}</h1>

              <img
                className=" h-[300px] w-[300px] transform transition duration-500 hover:scale-110 "
                src={book.image_url}
                alt="logo"
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </div>
            <button
              className="justify-center hover:bg-gray-800 bg-black text-white p-3 m-2 rounded-lg w-[300px]"
              onClick={() => navigate(`/books/${book.id}`)}
            >
              Book Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
