import { useState } from "react";

export const useForceRerender = () => {
  const [, setState] = useState<boolean>(true);
  return () => setState((prev) => !prev);
};
