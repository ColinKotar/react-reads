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
    color: #fff;
    background-color: #3384ff;

    :hover {
      background-color: #3384ff;
      filter: brightness(0.95);
    }
  }
  button[aria-expanded="true"] {
    display: flex;
  }

  :hover button {
    display: flex;
  }
`;

const BookShelf = ({ books, setAllBooks }) => {
  if (books.length <= 0) return <></>;
  return (
    <div className="shelf">
      {books?.map(book => (
        <StyledBook key={book?.id}>
          <img src={book?.imageLinks?.thumbnail} alt="Book cover" />

          <div className="title">{book?.title}</div>

          <div className="authors">
            {book?.authors?.map((author, index) => (
              <div key={index}>{author}</div>
            ))}
          </div>

          <BookDropdown book={book} setAllBooks={setAllBooks} />
        </StyledBook>
      ))}
    </div>
  );
};

export default BookShelf;
