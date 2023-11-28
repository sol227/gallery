import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import List from "./List";
import "./GalleryStyle.css";

const Gallery = () => {
  const [data, setData] = useState([]);
  const APP_KEY = "16760725-e056360765429f6588e4e5155";
  const [tag, setTag] = useState("");
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${tag}&image_type=photo&lang=ko`;

  return (
    <div className="wrap">
      <Search data={data} setTag={setTag} setData={setData} URL={URL} />
      <List URL={URL} data={data} />
    </div>
  );
};

export default Gallery;
