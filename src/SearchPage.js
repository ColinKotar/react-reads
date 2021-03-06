import React, { useEffect } from "react";
import styled from "styled-components";
import BookShelf from "./BookShelf";

const StyledSearchPage = styled.div`
  display: grid;
`;

const SearchPage = ({
  allBooks,
  setAllBooks,
  setSearchValue,
  searchedBooks,
  setSearchedBooks
}) => {
  useEffect(() => {
    // reset state
    return () => {
      setSearchValue("");
      setSearchedBooks([]);
    };
  }, [setSearchValue, setSearchedBooks]);

  // update searched books with shelf info
  const updatedBooks = searchedBooks.map(searched => {
    const found = allBooks.find(book => searched.id === book.id);

    if (found) {
      return found;
    } else {
      return searched;
    }
  });

  return (
    <StyledSearchPage>
      <BookShelf books={updatedBooks} setAllBooks={setAllBooks} />
    </StyledSearchPage>
  );
};

export default SearchPage;
