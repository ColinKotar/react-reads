import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAll } from "./BooksAPI";
import BookShelf from "./BookShelf";

const StyledHomePage = styled.div`
  overflow-y: auto;
  padding: 2rem;

  .shelf {
    display: grid;
    grid-template-columns: repeat(auto-fit, 12rem);
    grid-template-rows: masonry;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const HomePage = () => {
  // get all books when component mounts
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    getAll().then(res => setAllBooks(res));
  }, []);

  // book shelves (categories)
  const currentlyReading = allBooks?.filter(
    book => book.shelf === "currentlyReading"
  );
  const wantToRead = allBooks?.filter(book => book.shelf === "wantToRead");
  const read = allBooks?.filter(book => book.shelf === "read");

  return (
    <StyledHomePage>
      <h1>Currently Reading</h1>

      <BookShelf books={currentlyReading} />

      <h1>Want to Read</h1>
      <BookShelf books={wantToRead} />

      <h1>Read</h1>
      <BookShelf books={read} />
    </StyledHomePage>
  );
};

export default HomePage;
