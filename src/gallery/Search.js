import React from "react";
import axios from "axios";

const Search = ({ tag, setTag, setData, URL }) => {
  const handleSearch = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    try {
      const res = await axios.get(URL);
      setData(res.data.hits);
      console.log("성공: ", res.data.hits);
    } catch (err) {
      console.log("오류: ", err);
    }
  };

  const chageInput = (e) => {
    const { value } = e.target;
    setTag(value);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input type="text" value={tag} onChange={chageInput} />
      <button type="submit">검색</button>
    </form>
  );
};

export default Search;
