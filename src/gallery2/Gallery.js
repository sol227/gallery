import React, { useEffect, useState } from "react";
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";
import PreLoader from "./PreLoader";
import axios from "axios";
import { Container } from "./GalleryStyle";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const APP_KEY = "16760725-e056360765429f6588e4e5155";
    const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${text}&image_type=photo&lang=ko`;

    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(URL);
        // console.log("성공", res.data.hits);
        setData(res.data.hits);
      } catch (err) {
        console.log("오류", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [text]);

  const onSearch = (txt) => {
    setText(txt);
    setData([]);
  };

  return (
    <Container>
      <h2>pixabay 이미지 검색</h2>
      <GallerySearch text={text} onSearch={onSearch} />
      <hr />
      {loading ? <PreLoader /> : <GalleryList data={data} />}
    </Container>
  );
};

export default Gallery;
