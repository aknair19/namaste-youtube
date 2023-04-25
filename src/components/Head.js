import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    console.log(result[1]);
    setSuggestion(result[1]);
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      {/* LOGO */}
      <div className="flex items-center  col-span-1 ml-2">
        <div>
          <img
            className="w-8 h-8 cursor-pointer"
            alt="icon"
            src="https://imgs.search.brave.com/TJMtVsPxw6lILfni9KR8wv74p-pCSjkkPxpruUIG48E/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcm91bmRlZC1i/YXNpY3MvMjQvcm91/bmRlZF9fbWVudS01/MTIucG5n"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <div>
          <img
            className="w-18 h-16"
            alt="logo"
            src="https://imgs.search.brave.com/5cj3vFL-ohknNVTY0mzaI81_ca8x832DD2qEXvPw6nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvWW91VHViZS1M/b2dvLnBuZw"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className=" flex flex-col  justify-center items-start  col-span-10 relative">
        <div className="flex w-full items-center justify-center    ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search"
            className=" w-full max-w-lg h-8 border border-gray-800 rounded-l-xl"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className=" border border-l-0 border-gray-800 rounded-r-xl h-8 p-2 text-center bg-gray-200 ">
            🔍
          </button>
        </div>

        {/* Search Results */}
        {showSuggestion && (
          <div className=" ml-[4rem] absolute top-[3.4rem] bg-white py-2 px-5 w-3/4 border border-gray-400 rounded-xl">
            <ul>
              {suggestion.map((q) => (
                <li key={q} className="hover:bg-gray-100">
                  {" "}
                  🔍{q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* User Icon */}
      <div className="col-span-1 border border-black flex justify-center">
        <img
          className="h-10 w-10 mt-3"
          alt="user-icon"
          src="https://imgs.search.brave.com/X3np3vpAK7iJ-ymiqxB8GKvAUfb1YA3_5znygk-l5O8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzU1/MC83MzEvb3JpZ2lu/YWwvdXNlci1pY29u/LXZlY3Rvci5qcGc"
        />
      </div>
    </div>
  );
};

export default Head;
