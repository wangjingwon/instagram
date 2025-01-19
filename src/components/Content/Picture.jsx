import React from "react";

const Picture = ({ picture }) => {
  return (
    <div>
      <img src={picture} alt="" className="w-48" />
    </div>
  );
};

export default Picture;
