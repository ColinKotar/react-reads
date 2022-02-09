import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Navbar from "./Navbar";
import { useState } from "react";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #333;

  h1 {
    margin-top: 0;
    color: #444;
    font-weight: 500;
  }
`;

const App = () => {
  // search value
  const [value, setValue] = useState("");

  return (
    <StyledApp>
      <Navbar setValue={setValue} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/search" element={<SearchPage value={value} />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
