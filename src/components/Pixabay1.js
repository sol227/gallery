import { useState, useEffect } from "react";
import axios from "axios";

const Pixabay1 = () => {
  const APP_KEY = "16760725-e056360765429f6588e4e5155";
  const TEXT = "눈 크리스마스";
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${TEXT}&image_type=photo&lang=ko`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.hits);
        console.log("성공: ", res.data.hits);
      } catch (err) {
        console.log("오류: ", err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>pixabay1</h2>
      <div>
        {data &&
          data.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: 150 }}
            />
          ))}
      </div>
    </div>
  );
};

export default Pixabay1;
