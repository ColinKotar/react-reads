import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Book from "./Book";
import { getAll } from "./BooksAPI";

const StyledHomePage = styled.div`
  overflow-y: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 12rem);
  grid-template-rows: masonry;
  gap: 2rem;
  padding: 4rem 2rem;
`;

const HomePage = () => {
  // get all books when component mounts
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    getAll().then(res => setAllBooks(res));
  }, []);

  return (
    <StyledHomePage>
      {allBooks.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </StyledHomePage>
  );
};

export default HomePage;
