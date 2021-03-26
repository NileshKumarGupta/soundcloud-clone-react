import { Button, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React, { useContext, useState } from "react";

import { UserContext } from "./userProvider";

import "./search.css";
import SignModal from "./signModal";

const Search = () => {
  const [openModal, setOpenModal] = useState(false);

  const user = useContext(UserContext);

  return (
    <div className="searchDiv">
      <TextField
        className="searchInput"
        placeholder="Search for artists, bands, tracks, podcasts"
        variant="filled"
        label="Search"
        InputProps={{
          endAdornment: <SearchOutlined />,
        }}
      ></TextField>
      or
      <Button
        className="uploadButton"
        onClick={() => {
          if (user) {
            // login logic
          } else setOpenModal(true);
        }}
      >
        Upload Your Own
      </Button>
      <SignModal openModal={openModal} setOpenModal={setOpenModal} signUp />
    </div>
  );
};

export default Search;
