import React from "react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function Likes({ numberOfLikes }) {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick(!click);
  };
  return (
    <div className="flex items-center gap-1">
      {click ? numberOfLikes : numberOfLikes + 1}
      <FaHeart className={click ? "" : "text-red-500"} onClick={onClick} />
    </div>
  );
}

export default Likes;
