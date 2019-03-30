import React from "react";
import styled from "styled-components";
import { Button } from "@ui/elements";

export const SearchBar = ({ query, setQuery, goFetch }) => (
  <div className="ui segment">
    <form
      onSubmit={e => {
        e.preventDefault();
        goFetch(query);
      }}
      className="ui form"
    >
      <label>Image Search</label>
      <SearchBox className="field">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchBox>
    </form>
  </div>
);

//<Grid>
// <CellLabel />
//</Grid>;

const SearchBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  padding: 1.3rem 0;
`;

const SearchButton = styled(Button)`
  margin-left: 0.5rem;
`;
