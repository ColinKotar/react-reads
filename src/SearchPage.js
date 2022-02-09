import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { search } from "./BooksAPI";
import BookShelf from "./BookShelf";

const StyledSearchPage = styled.div`
  overflow-y: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 12rem);
  grid-template-rows: masonry;
  gap: 2rem;
  padding: 4rem 2rem;
`;

const SearchPage = ({ value }) => {
  // get all books when component mounts
  const [searchedBooks, setSearchedBooks] = useState([]);
  useEffect(() => {
    value && search(value).then(res => setSearchedBooks(res));
  }, [value, setSearchedBooks]);

  return (
    <StyledSearchPage>
      <BookShelf books={searchedBooks} />
    </StyledSearchPage>
  );
};

export default SearchPage;
