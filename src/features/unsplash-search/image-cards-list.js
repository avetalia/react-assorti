import React, { useState } from "react";
import styled from "styled-components";

import { useUnsplashApi } from "./api/use-unsplash";

import { SearchBar } from "./search-bar";
import { ImageCard } from "./image-card-item";

export const ImageCardsList = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, isError, goFetch } = useUnsplashApi();

  const images = data.map(image => {
    return <ImageCard image={image} key={image.id} />;
  });

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div className="field">
        <SearchBar setQuery={setQuery} query={query} goFetch={goFetch} />
        Found: {data.length}
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? <div>Loading ...</div> : <CarGrid>{images}</CarGrid>}
      </div>
    </div>
  );
};

export const CarGrid = styled.div`
  display: grid;
  grid-gap: 0 8px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 10px;
`;
