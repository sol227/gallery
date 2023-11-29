import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-css";
import { GalleryListContainer, breakpointCol } from "./GalleryStyle";

const GalleryList = ({ data }) => {
  return (
    <GalleryListContainer>
      <Masonry
        breakpointCols={breakpointCol}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </Masonry>
    </GalleryListContainer>
  );
};

export default GalleryList;
