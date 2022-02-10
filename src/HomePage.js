import React from "react";
import BookShelf from "./BookShelf";

const HomePage = ({ allBooks, setAllBooks }) => {
  // book shelves (categories)
  const currentlyReading = allBooks?.filter(
    book => book.shelf === "currentlyReading"
  );
  const wantToRead = allBooks?.filter(book => book.shelf === "wantToRead");
  const read = allBooks?.filter(book => book.shelf === "read");

  return (
    <>
      <h1>Currently Reading</h1>

      <BookShelf books={currentlyReading} setAllBooks={setAllBooks} />

      <h1>Want to Read</h1>
      <BookShelf books={wantToRead} setAllBooks={setAllBooks} />

      <h1>Read</h1>
      <BookShelf books={read} setAllBooks={setAllBooks} />
    </>
  );
};

export default HomePage;
