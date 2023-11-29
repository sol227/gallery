import React, { useEffect, useRef, useState } from "react";
import { ImageSearch } from "./GalleryStyle";

const GallerSearch = ({ text, onSearch }) => {
  const [inputTxt, setInputTxt] = useState(text);
  const focusRef = useRef();

  useEffect(() => {
    if (inputTxt) {
      setInputTxt("");
      focusRef.current.focus();
    }
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTxt) return;

    onSearch(inputTxt);
  };

  return (
    <ImageSearch onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputTxt}
        onChange={(e) => setInputTxt(e.target.value)}
        ref={focusRef}
      />
      <button type="submit">검색</button>
    </ImageSearch>
  );
};

export default GallerSearch;
