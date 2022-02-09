import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const BookDropdown = ({ onCurrentlyReading, onWantToRead, onRead }) => {
  // dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // dropdown handlers
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Currently reading</MenuItem>

        <MenuItem onClick={handleClose}>Want to read</MenuItem>

        <MenuItem onClick={handleClose}>Read</MenuItem>

        <MenuItem onClick={handleClose}>None</MenuItem>
      </Menu>
    </>
  );
};

export default BookDropdown;
