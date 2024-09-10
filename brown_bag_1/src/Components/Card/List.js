import React from "react";
import Card from "./Card";

const CardList = ({ items }) => {
  console.log("list has rerendered");
  return (
    <div className="grid">
      {[...Array(items)].map((_, i) => (
        <Card key={`key-${i}`} />
      ))}
    </div>
  );
};

export default CardList;
