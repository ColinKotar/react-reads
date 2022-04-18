import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { update } from "./BooksAPI";

const BookDropdown = ({ book, setAllBooks }) => {
  // dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // dropdown handlers
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // menu item handlers
  const updateBooks = shelf => {
    update(book, shelf);
    let found = false;
    setAllBooks(prev => {
      const newBooks = prev.map(pBook => {
        if (pBook.id === book.id) {
          found = true;
          return { ...pBook, shelf };
        } else {
          return pBook;
        }
      });
      if (!found) {
        newBooks.push({ ...book, shelf });
      }
      return newBooks;
    });
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => updateBooks("currentlyReading")}
          selected={book.shelf === "currentlyReading"}
        >
          Currently reading
        </MenuItem>

        <MenuItem
          onClick={() => updateBooks("wantToRead")}
          selected={book.shelf === "wantToRead"}
        >
          Want to read
        </MenuItem>

        <MenuItem
          onClick={() => updateBooks("read")}
          selected={book.shelf === "read"}
        >
          Read
        </MenuItem>

        <MenuItem
          onClick={() => updateBooks("none")}
          selected={book.shelf === "none"}
        >
          None
        </MenuItem>
      </Menu>
    </>
  );
};

export default BookDropdown;
