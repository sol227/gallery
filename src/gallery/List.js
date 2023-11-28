import { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = ({ data }) => {
  return (
    <div className="list">
      {data.map((item) => (
        <ul>
          <ListItem key={item.id} item={item} />
        </ul>
      ))}
    </div>
  );
};

export default List;
