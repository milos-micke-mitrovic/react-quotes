import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useQuotes = () => {
  const [page, setPage] = useState(1);
  const [chosenTags, setChosenTags] = useState([]);
  const [sortDirection, setSortDirection] = useState(null);
  const [sortBy, setSortBy] = useState("createdAt");

  const fetchQuotes = async (page = 1, chosenTags, sortDirection, sortBy) => {
    const tags = chosenTags.length > 0 ? "&tags=" + chosenTags.toString() : "";
    const direction = sortDirection ? "&sortDirection=" + sortDirection : "";
    const by = sortBy ? "&sortBy=" + sortBy : "";

    const res = await fetch(
      `http://127.0.0.1:3000/quotes?pageSize=5&page=${page}${tags}${direction}${by}`
    );

    const data = await res.json();

    return data;
  };

  const fetchTags = () =>
    fetch("http://127.0.0.1:3000/tags")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

  const quotesQuery = useQuery({
    queryKey: ["quotesQuery", page, chosenTags, sortDirection, sortBy],
    queryFn: () => fetchQuotes(page, chosenTags, sortDirection, sortBy),
    keepPreviousData: true,
  });

  const tagsQuery = useQuery({
    queryKey: ["tagsQuery"],
    queryFn: () => fetchTags(),
  });

  return {
    page,
    setPage,
    setChosenTags,
    setSortBy,
    setSortDirection,
    quotesQuery,
    tagsQuery,
  };
};

export default useQuotes;
