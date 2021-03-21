import { Button, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

import "./search.css";

const Search = () => {
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
      <Button className="uploadButton">Upload Your Own</Button>
    </div>
  );
};

export default Search;
