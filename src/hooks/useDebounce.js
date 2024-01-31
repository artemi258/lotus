import { useEffect, useState } from "react";

export const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  console.log(value);
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, [value]);
  return debouncedValue;
};
