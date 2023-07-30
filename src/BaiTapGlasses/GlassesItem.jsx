import React from "react";

const GlassesItem = ({prd,handleGlass}) => {
  return (
    <div className="col-2 mt-4">
      <button
        style={{ border: "2px solid black" }}
        onClick={() => {
          handleGlass(prd);
        }}
      >
        <img
          style={{ height: 150, width: 200 }}
          className="img-fluid"
          src={prd.url}
          alt="..."
        />
      </button>
    </div>
  );
};

export default GlassesItem;
