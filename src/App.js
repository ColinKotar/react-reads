import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Navbar from "./Navbar";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #333;

  .loading {
    height: 100%;
    width: 100%;

    background-color: #eee;
    animation: load 2s linear infinite;
  }

  @keyframes load {
    0% {
      background-color: #ccc;
    }
    50% {
      background-color: #fff;
    }
    100% {
      background-color: #ccc;
    }
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
