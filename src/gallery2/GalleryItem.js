import React from "react";
import { GalleryItemBox } from "./GalleryStyle";

const GalleryItem = ({ item }) => {
  const { user, tags, previewURL, views, type } = item;
  return (
    <GalleryItemBox>
      <h2>#{tags}</h2>
      <img src={previewURL} alt={tags} />
      <ul>
        <li>작성자 : {user}</li>
        <li>뷰어 : {views}</li>
        <li>종류 : {type}</li>
      </ul>
    </GalleryItemBox>
  );
};

export default GalleryItem;
