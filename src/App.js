import React from "react";
import "./App.css";
// import UseCallback1 from "./components/UseCallback1";
// import API1 from "./components/API1";
// import Pixabay1 from "./components/Pixabay1";
// import Gallery from "./gallery/Gallery";
import Gallery from "./gallery2/Gallery";
import GlobalStyle from "./assect/GlobalStyle";

const App = () => {
  return (
    <>
      {/* styled-components 최상위 컴포넌트에 적용 */}
      <GlobalStyle />
      {/*<h1>리액트</h1>
       <UseCallback1 /> 
        <API1 />
        <Pixabay1 /> */}
      <Gallery />
    </>
  );
};

export default App;
