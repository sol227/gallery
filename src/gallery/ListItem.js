import React from "react";

const ListItem = ({ item }) => {
  return (
    <>
      <li># {item.user}</li>
      <li>
        <img src={item.webformatURL} alt={item.tags} />
      </li>
      <li>태그: {item.tags}</li>
      <li>뷰어: {item.views}</li>
      <li>종류: {item.type}</li>
    </>
  );
};

export default ListItem;
