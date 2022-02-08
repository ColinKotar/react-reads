import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Book from "./Book";
import { search } from "./BooksAPI";

const StyledSearchPage = styled.div`
  overflow-y: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 12rem);
  grid-template-rows: masonry;
  gap: 2rem;
  padding: 4rem 2rem;
`;

const SearchPage = () => {
  // search value
  const [value, setValue] = useState("lin");

  // get all books when component mounts
  const [searchedBooks, setSearchedBooks] = useState([]);
  useEffect(() => {
    search(value).then(res => setSearchedBooks(res));
  }, [value, setSearchedBooks]);

  return (
    <StyledSearchPage>
      {searchedBooks?.length > 0 ? (
        searchedBooks.map(book => <Book key={book.id} book={book} />)
      ) : (
        <div className="loading" />
      )}
    </StyledSearchPage>
  );
};

export default SearchPage;
