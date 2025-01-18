import { useState, useEffect } from "react";

export const useSearchPhone = (initialValue = "", delay = 500) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const [debouncedQuery, setDebouncedQuery] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);

  return {
    searchQuery,
    setSearchQuery,
    debouncedQuery,
  };
};
