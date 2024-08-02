import { useState, useEffect } from "react";

export function useLocalStorageState(initialState,key) {
  const [value, setValue] = useState(function () {
    const storedMovies = localStorage.getItem(key);
    return JSON.parse(storedMovies);
  });

  // an use effect to store in a local storage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value,key]
  );

  return[value,setValue]
}
