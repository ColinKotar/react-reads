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
  // search value
  const [value, setValue] = useState("");

  // books
  const [allBooks, setAllBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  // fetch on mount, refetch when url changes
  useEffect(() => getAll().then(res => setAllBooks(res)), []);
  useEffect(
    () =>
      value &&
      search(value).then(res => {
        if (res?.error) {
          setSearchedBooks([]);
        } else setSearchedBooks(res);
      }),
    [value]
  );

  return (
    <StyledApp>
      <Navbar setValue={setValue} setSearchedBooks={setSearchedBooks} />

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
                searchedBooks={searchedBooks}
                allBooks={allBooks}
                setAllBooks={setAllBooks}
              />
            }
          />
        </Routes>
      </StyledPage>
    </StyledApp>
  );
};

export default App;
