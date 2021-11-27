import { useEffect, useMemo, useState } from "react";
import { debounce } from "../helpers/debounce";

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  const listener = useMemo(() => debounce(resizeHandler), []);

  useEffect(() => {
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [listener]);

  return width;
};
