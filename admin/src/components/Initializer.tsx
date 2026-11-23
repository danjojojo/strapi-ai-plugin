import { useEffect, useRef } from "react";
import { PLUGIN } from "../constants";

type InitializerProps = {
  setPlugin: (id: string) => void;
};

const Initializer = ({ setPlugin }: InitializerProps) => {
  const ref = useRef(setPlugin);

  useEffect(() => {
    ref.current(PLUGIN.ID);
  }, []);

  return null;
};

export { Initializer };