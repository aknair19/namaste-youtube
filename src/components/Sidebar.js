import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; //early return

  return (
    <div className="shadow-lg w-1/4 flex flex-col justify-center p-3 gap-2">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-md ">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Music</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-md ">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Movies</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
