import React from "react";
import styled from "styled-components";

const StyledBook = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  padding: 0.5rem;
  gap: 0.2rem;
  border-radius: 0.25rem;

  img {
    height: auto;
    border-radius: 0.25rem;
  }

  .title {
    font-weight: 500;
  }

  .authors {
    display: flex;
    flex-direction: column;
    color: #666;
  }

  :hover {
    background-color: #eee;
  }
`;

const Book = ({ book }) => {
  // book data
  const { imageLinks, title, authors } = book;

  return (
    <StyledBook>
      <img src={imageLinks.thumbnail} alt="Book cover" />

      <div className="title">{title}</div>

      <div className="authors">
        {authors.map((author, index) => (
          <div key={index}>{author}</div>
        ))}
      </div>
    </StyledBook>
  );
};

export default Book;
