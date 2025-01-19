import React from "react";
import Likes from "./Likes";
import Description from "./Description";
import Comment from "./Comment";
import Picture from "./Picture";
function Content({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <div className="border m-8 rounded-md p-2 shadow-lg">
          <p className="font-bold">{item.name}</p>
          <Picture picture={item.picUrl} />
          <Description description={item.description} />
          <div className="flex justify-between">
            <Comment comment={item.comment} />
            <Likes numberOfLikes={item.numberOfLikes} />
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Content;
