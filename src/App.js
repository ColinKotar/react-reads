import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { getAll, search } from "./BooksAPI";

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

  .shelf {
    display: grid;
    grid-template-columns: repeat(auto-fit, 12rem);
    grid-template-rows: masonry;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const StyledPage = styled.div`
  overflow-y: auto;
  padding: 4rem 10%;
`;

const App = () => {
  // app state
  const [searchValue, setSearchValue] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  // fetch all books when component mounts
  useEffect(() => getAll().then(res => setAllBooks(res)), []);

  useEffect(() => {
    search(searchValue).then(res => {
      console.log(searchValue);
      if (searchValue === "" || res?.error) {
        setSearchedBooks([]);
      } else setSearchedBooks(res);
    });
  }, [searchValue]);

  return (
    <StyledApp>
      <Navbar setSearchValue={setSearchValue} />

      <StyledPage>
        <Routes>
          <Route
            path="/"
            element={<HomePage allBooks={allBooks} setAllBooks={setAllBooks} />}
          />

          <Route
            path="/search"
            element={
              <SearchPage
                allBooks={allBooks}
                setAllBooks={setAllBooks}
                setSearchValue={setSearchValue}
                searchedBooks={searchedBooks}
                setSearchedBooks={setSearchedBooks}
              />
            }
          />
        </Routes>
      </StyledPage>
    </StyledApp>
  );
};

export default App;
