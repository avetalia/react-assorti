import { useState, useEffect } from "react";
import unsplash from "./unsplash-axios";

export const useUnsplashApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("cars");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await unsplash.get("/search/photos", {
          params: { query: search }
        });
        setData(response.data.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
    console.log(data);
  }, [search]);

  const goFetch = query => {
    setSearch(query);
  };

  return { data, isLoading, isError, goFetch };
};
