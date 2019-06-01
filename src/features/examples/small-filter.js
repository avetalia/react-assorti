import React, { useState } from "react";

export const SmallFilter = () => {
  const [filterBy, setFilter] = useState("all");

  const renderFiltered = filterBy => {
    switch (filterBy) {
      case "my":
        return <div>My Cards here</div>;
      case "favorite":
        return <div>Favorite</div>;
      case "all":
      default:
        return <div>all cards</div>;
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setFilter("all");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("my");
        }}
      >
        My content
      </button>
      <button
        onClick={() => {
          setFilter("favorite");
        }}
      >
        Favorite
      </button>

      {renderFiltered(filterBy)}
    </>
  );
};
