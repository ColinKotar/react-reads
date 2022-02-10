import React from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ArrowBack, Search } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  min-height: 3rem;
  padding: 0 10%;

  gap: 0.5rem;
  background-color: #3384ff;

  .title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
  }

  button {
    padding: 0.25rem;
    background-color: white;
    :hover {
      background-color: #f2f2f2;
    }
  }

  input {
    background-color: #fff;
    padding: 0.35rem 0.75rem;
  }
`;

const Navbar = ({ setValue, setSearchedBooks }) => {
  // navigate to pages
  const navigate = useNavigate();
  const handleSearchClick = () => navigate("/search");
  const handleHomeClick = () => {
    navigate("/");
    setValue("");
    setSearchedBooks([]);
  };

  // handle search input change
  const handleSearchChange = e => setValue(e.target.value);

  return (
    <StyledNavbar>
      <span className="title">React Reads</span>

      <Routes>
        <Route
          path="/"
          element={
            <IconButton onClick={handleSearchClick}>
              <Search />
            </IconButton>
          }
        />

        <Route
          path="/search"
          element={
            <>
              <IconButton onClick={handleHomeClick}>
                <ArrowBack />
              </IconButton>

              <Input
                placeholder="Search for books"
                onChange={handleSearchChange}
              />
            </>
          }
        />
      </Routes>
    </StyledNavbar>
  );
};

export default Navbar;
