import { useEffect, useState } from "react";

export const useLocalStorage = <Type>(key: string, defaultVale: Type) => {
  // store the local storage value in a state
  const [value, setValue] = useState(() => {
    try {
      // get the item from the local storage
      const saved = localStorage.getItem(key);

      // if the local storage has value with the value of the variable key
      if (saved !== null) {
        return JSON.parse(saved);
      }

      // if not, return the default value
      return defaultVale;
    } catch {
      // if there was an error, return the default value
      return defaultVale;
    }
  });

  // react to the key or the value change and update it in the local storage
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [key, value]
  );

  return [value, setValue];
};
