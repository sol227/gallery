import styled from "styled-components";

// Gallery.js
export const Container = styled.div`
  width: ${(props) => props.width};
  margin: 20px auto;
`;

// GallerySearch.js
export const ImageSearch = styled.form`
  text-align: center;
  input[type="text"] {
    outline: none;
    padding: 2px 8px;
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    font-size: 18px;
  }
  button[type="submit"] {
    width: 100px;
    height: 40px;
    font-size: 18px;
    background-color: #000;
    color: #fff;
    border: none;
    vertical-align: top;
    cursor: pointer;
    &:hover {
      background-color: maroon;
    }
  }
`;

// GalleryList.js
export const GalleryListContainer = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 50px; /* gutter size */
    background-clip: padding-box;
  }
`;

// GalleryItem.js
export const GalleryItemBox = styled.section`
  background-color: aliceblue;
  width: 200px;
  margin: 20px;
  padding: 10px;
`;

// breakpointCol
export const breakpointCol = {
  default: 5,
  1400: 4,
  960: 3,
  414: 2,
};
