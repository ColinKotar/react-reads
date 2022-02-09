import React from "react";
import styled from "styled-components";
import BookDropdown from "./BookDropdown";

const StyledBook = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

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

  button {
    display: none;
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: #fff;
    border: 1px solid #eee;

    :hover {
      background-color: #f2f2f2;
    }
  }
  button[aria-expanded="true"] {
    display: flex;
  }

  :hover button {
    display: flex;
  }
`;

const BookShelf = ({ books }) => {
  console.log(books);
  if (books.length <= 0) return <></>;
  return (
    <div className="shelf">
      {books.map(({ id, imageLinks, title, authors }) => (
        <StyledBook key={id}>
          <img src={imageLinks.thumbnail} alt="Book cover" />

          <div className="title">{title}</div>

          <div className="authors">
            {authors.map((author, index) => (
              <div key={index}>{author}</div>
            ))}
          </div>

          <BookDropdown />
        </StyledBook>
      ))}
    </div>
  );
};

export default BookShelf;
